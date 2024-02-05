interface TokenType {
	token: string;
}

const LayoutStore = () => {
	let csrf = $state<TokenType>({
		token: "",
	});

	const store = {
		get csrf() {
			return csrf;
		},
		set csrf(value: TokenType) {
			csrf = value;
		},
	};

	return store;
};

export const token = LayoutStore();
