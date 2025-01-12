import { NextRequest, NextResponse } from "next/server";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import fs from "fs";
import path from "path";
import { format } from "date-fns";

export async function POST(req: NextRequest) {
	const { url, formData } = await req.json();

	if (!url || !formData) {
		return NextResponse.json(
			{ message: "Missing url or formData" },
			{ status: 400 }
		);
	}

	try {
		// 1. Download the file from Firebase Storage
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error(
				`Failed to download file from Firebase: ${response.status} ${response.statusText}`
			);
		}

		// **Check Content-Type**
		const contentType = response.headers.get("content-type");
		console.log("Downloaded file Content-Type:", contentType);
		if (!contentType || !contentType.includes("officedocument")) {
			throw new Error(
				`Downloaded file does not seem to be a valid document. Content-Type: ${contentType}`
			);
		}

		// Convert the response body to a Buffer
		const arrayBuffer = await response.arrayBuffer();
		const fileBuffer = Buffer.from(arrayBuffer);
		console.log("Downloaded file size (bytes):", fileBuffer.length);

		// 2. Create a temporary directory if it doesn't exist
		const tempDir = path.join(process.cwd(), "temp");
		if (!fs.existsSync(tempDir)) {
			fs.mkdirSync(tempDir, { recursive: true });
		}

		// 3. Write the file to a temporary location
		const tempFilePath = path.join(
			tempDir,
			`temp-doc-${Date.now()}.docx` // Use a unique name
		);
		fs.writeFileSync(tempFilePath, fileBuffer);

		// 4. Read the content from the temporary file
		const content = fs.readFileSync(tempFilePath, "binary");

		try {
			const zip = new PizZip(content);
			const doc = new Docxtemplater(zip, {
				paragraphLoop: true,
				linebreaks: true,
			});

			if (formData.dob) {
				formData.dob = format(new Date(formData.dob), "dd/MM/yyyy");
			}

			doc.render(formData);

			const buf = doc.getZip().generate({
				type: "nodebuffer",
				compression: "DEFLATE",
			});

			// 5. Clean up: Delete the temporary file
			fs.unlinkSync(tempFilePath);

			return new NextResponse(buf, {
				status: 200,
				headers: {
					"Content-Type":
						"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
					"Content-Disposition": `attachment; filename="${formData.formName}.docx"`,
					"Content-Length": buf.length.toString(),
				},
			});
		} catch (docTemplaterError: unknown) {
			console.error("Docxtemplater error:", docTemplaterError);
			// If Docxtemplater fails, it might be due to file corruption.
			// You might want to log more details about the error.
			throw docTemplaterError;
		}
	} catch (error: unknown) {
		console.error("Error generating document:", error);
		const errorMessage =
			error instanceof Error ? error.message : "Unknown error";
		return NextResponse.json(
			{ message: "Error generating document", error: errorMessage },
			{ status: 500 }
		);
	}
}

export const config = {
	api: {
		bodyParser: {
			sizeLimit: "5mb",
		},
	},
};
