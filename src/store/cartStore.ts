import {create} from 'zustand';
import {CartState} from "../types/cart.types.ts";


export const useCartStore = create<CartState>()((set) => ({
	items: [],
	total: (state) => state.items.reduce((total, item) => total + item.price, 0),
	addToCart: (product) => set((state) => ({ items: [...state.items, product] })),
	removeFromCart: (productId) => set((state) => ({ items: state.items.filter(item => item.id !== productId) })),
}));


