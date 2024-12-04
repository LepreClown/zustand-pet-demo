interface User {
	id: number;
	name: string;
	email: string;
}

export interface AuthState {
	user: User | null;
	login: (userData: User) => void;
	logout: () => void;
}
