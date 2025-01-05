const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const authService = {
	async register(data: { name?: string; email: string; password: string }) {
		const response = await fetch(`${API_URL}/auth/register`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Signup failed");
		}

		return response.json();
	},

	async login(data: { email: string; password: string }) {
		const response = await fetch(`${API_URL}/auth/login`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});

		if (!response.ok) {
			const errorData = await response.json();
			throw new Error(errorData.message || "Signin failed");
		}

		return response.json();
	},
};
