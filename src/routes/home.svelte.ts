const CountStore = () => {
	let count = $state<number>(0);
	let sqrCount = $derived<number>(count ** 2);

	const store = {
		get count() {
			return count;
		},
		set count(value: number) {
			count = value;
		},
		increment: () => {
			count++;
		},
		decrement: () => {
			count--;
		},
		get sqrCount() {
			return sqrCount;
		},
	};

	return store;
};

export const counter = CountStore();
