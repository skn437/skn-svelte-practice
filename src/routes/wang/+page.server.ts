import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
	interface TokenType {
		token: string;
	}

	try {
		const response = await event.fetch("http://localhost:8000", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
			redirect: "follow",
		});

		const message = await response.text();

		const getCsrf = async () => {
			const response = await event.fetch(
				"http://localhost:8000/api/auth/csrf",
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
					credentials: "include",
					redirect: "follow",
				}
			);

			const csrf = (await response.json()) as TokenType;

			return csrf;
		};

		const getData = async () => {
			const response = await event.fetch("http://localhost:8000", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-CSRF-TOKEN": (await getCsrf()).token,
				},
				credentials: "include",
				redirect: "follow",
			});

			const message = await response.text();

			return message;
		};

		const message2 = await getData();

		return {
			message,
			message2,
		};
	} catch (e) {
		return {
			message: "Error",
			message2: "Error",
		};
	}
};
