const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const formsService = {
	async getAllForms(data: {}) {
		const response = await fetch(`${API_URL}/forms/get-all-forms`, {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Failed to fetch forms");
		}

		return response.json();
	},
};
