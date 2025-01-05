import { z } from "zod";

const configSchema = z.object({
	NEXT_PUBLIC_API_URL: z.string(),
});

const configProject = configSchema.safeParse(process.env);

if (!configProject.success) {
	throw new Error("Invalid config");
}

const envConfig = configProject.data;
export default envConfig;
