import { InitialHomeData, type HomeDataType } from "./data.type";

const HomeDataStore = () => {
	let users = $state<HomeDataType[]>(InitialHomeData);
	let total = $state<number>(0);

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
		set total(value: number) {
			total = value;
		},
	};

	return store;
};

export const home = HomeDataStore();
