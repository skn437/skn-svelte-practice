import { Observable } from "rxjs/internal/Observable";
import type { PageServerData } from "./$types";
import { CreateRxJsStore } from "$lib/rxjs/rxjs";
import { map } from "rxjs/internal/operators/map";
import { skn } from "./so.svelte";

export const SoRoutePipeline = (data: PageServerData) => {
	const { observer } = CreateRxJsStore<typeof data | typeof data.users>();

	const observable = new Observable<typeof data>((observer) => {
		observer.next(data);
	}).pipe(
		map((value) => value.users),
		map((value) => {
			skn.skn = value;
			return value;
		})
	);

	observable.subscribe(observer);
};
