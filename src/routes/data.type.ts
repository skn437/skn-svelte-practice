export interface HomeDataType {
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
	email: string;
}

export const InitialHomeData: HomeDataType[] = [
	{
		id: 0,
		name: "",
		phone: "",
		username: "",
		website: "",
		email: "",
	},
];
