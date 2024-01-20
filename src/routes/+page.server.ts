import type { PageServerLoad } from "./$types";
import type { HomeDataType } from "./data.type";

export const load: PageServerLoad = async (event) => {
	const response = await event.fetch(
		"https://jsonplaceholder.typicode.com/users",
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}
	);

	const data = (await response.json()) as HomeDataType[];

	return {
		users: data,
	};
};
