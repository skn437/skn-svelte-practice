import { InitialHomeData, type HomeDataType } from "./data.type";

const HomeDataStore = () => {
	let users = $state<HomeDataType[]>(InitialHomeData);

	const store = {
		get users() {
			return users;
		},
		set users(value: HomeDataType[]) {
			users = value;
		},
	};

	return store;
};

export const home = HomeDataStore();
