import type { PageServerLoad } from "./$types";
import { SknDefaultData } from "./so.svelte";
import type { SoRouteSknType } from "./so.type";

export const load: PageServerLoad = async (event) => {
	try {
		const response = await event.fetch(
			"https://jsonplaceholder.typicode.com/users",
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		const users = (await response.json()) as SoRouteSknType[];

		return {
			users,
		};
	} catch (error) {
		if (error instanceof Error) {
			console.error("Error: ", error.message, " ❌");
		}
		//throw error;
		return {
			users: SknDefaultData, //* Fallback Data
		};
	}
};
