import type { Observer } from "rxjs/internal/types";
import type { RxJsStoreType } from "./rxjs.type";

export const CreateRxJsStore = <T>(): RxJsStoreType<T> => {
	const observer: Observer<T> = {
		next: (value) => {
			console.log("Data In Observer: ", value);
		},
		error: (err: Error) => {
			console.log("Error: ", err.message);
		},
		complete: () => {
			console.log("Data Streaming Completed!");
		},
	};

	const store = {
		get observer() {
			return observer;
		},
	};

	return store;
};
