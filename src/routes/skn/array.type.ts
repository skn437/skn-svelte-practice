export interface StoreType {
	array: number[];
	addItem: (value: number) => void;
	removeItem: () => void;
	readonly total: number;
}
