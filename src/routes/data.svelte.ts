import { InitialHomeData, type HomeDataType } from "./data.type";

const HomeDataStore = () => {
	let users = $state<HomeDataType[]>(InitialHomeData);
	let total = $derived.call<number>(() => {
		let sum: number = users.reduce((acc, user) => acc + user.id, 0);
		return sum;
	});

	const store = {
		get users() {
			return users;
		},
		set users(value: HomeDataType[]) {
			users = value;
		},
		get total() {
			return total;
		},
	};

	return store;
};

export const home = HomeDataStore();
