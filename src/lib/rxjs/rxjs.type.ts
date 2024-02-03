import { Observable } from "rxjs/internal/Observable";
import type { Observer } from "rxjs/internal/types";

export interface RxJsStoreType<T> {
	readonly observer: Observer<T>;
}
