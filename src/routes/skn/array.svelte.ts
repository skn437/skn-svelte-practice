import type { StoreType } from "./array.type";

const ArrayStore = () => {
	let array = $state<number[]>([7, 4, 3]);

	let total = $derived.call<number>(() => {
		let totalOfArray = array.reduce((acc, value) => acc + value, 0);

		return totalOfArray;
	});

	const store: StoreType = {
		get array() {
			return array;
		},
		set array(value: number[]) {
			array = value;
		},
		addItem: (value: number) => {
			array.push(value);
		},
		removeItem: () => {
			array.pop();
		},
		get total() {
			return total;
		},
	};

	return store;
};

export const arrayCounter = ArrayStore();
