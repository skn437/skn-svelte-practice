import type { SoRouteSknType, SoRouteStoreType } from "./so.type";

export const SknDefaultData: SoRouteSknType[] = [
	//*Fallback Data
	{
		id: 0,
		name: "no data found!",
		phone: "no data found!",
		username: "no data found!",
		website: "no data found!",
		email: "no data found!",
	},
];

const SoRouteStore = (): SoRouteStoreType => {
	let skn = $state<SoRouteSknType[]>(SknDefaultData);

	let idArray = $derived.by<number[]>(() => {
		let ids: number[] = skn.reduce(
			(acc: number[], data: SoRouteSknType) => [...acc, data.id],
			[]
		);
		return ids;
	});

	let total = $derived.by<number>(() => {
		let sum = idArray.reduce((acc: number, number: number) => acc + number, 0);
		return sum;
	});

	const store: SoRouteStoreType = {
		get skn() {
			return skn;
		},
		set skn(value: SoRouteSknType[]) {
			skn = value;
		},
		get idArray() {
			return idArray;
		},
		get total() {
			return total;
		},
	};

	return store;
};

export const skn = SoRouteStore();
