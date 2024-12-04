export interface Product {
	id: number;
	name: string;
	price: number;
}

export interface CartState {
	items: Product[];
	total: (state: CartState) => void;
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
}