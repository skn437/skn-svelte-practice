import { Observable } from "rxjs/internal/Observable";
import { map } from "rxjs/internal/operators/map";

import { CreateRxJsStore } from "$lib/rxjs";
import { home } from "./data.svelte";

import type { PageServerData } from "./$types";

export const HomePagePipeline = (data: PageServerData) => {
	const { observer } = CreateRxJsStore<typeof data.users | number>();

	const observable = new Observable<typeof data>((observer) => {
		observer.next(data);
	}).pipe(
		map((value) => {
			console.log("1st operator data: ", value);
			return value.users;
		}),
		map((value) => {
			console.log("2nd operator data: ", value);
			home.users = value;
			return value;
		}),
		map((value) => {
			console.log("3rd operator data: ", value);
			return home.total;
		})
	);

	observable.subscribe(observer);
};
