export interface SoRouteSknType {
	id: number;
	name: string;
	phone: string;
	username: string;
	website: string;
	email: string;
}

export interface SoRouteStoreType {
	skn: SoRouteSknType[];
	readonly idArray: number[];
	readonly total: number;
}
