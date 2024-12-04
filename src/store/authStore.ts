import {create} from 'zustand';
import {AuthState} from "../types/user.types.ts";


export const useAuthStore = create<AuthState>()((set) => ({
	user: null,
	login: (userData) => set({user: userData}),
	logout: () => set({user: null})
}));

