import {useCartStore} from "../../store/cartStore.ts";
import {Product} from "../../types/cart.types.ts";

const products = [
	{id: 1, name: 'Product 1', price: 100},
	{id: 2, name: 'Product 2', price: 200},
	{id: 3, name: 'Product 3', price: 300}
];

export const Cart = () => {
	const items = useCartStore((state) => state.items);
	const addToCart = useCartStore((state) => state.addToCart);
	const removeFromCart = useCartStore((state) => state.removeFromCart);
	
	const onAddToCart = (product: Product) => {
		addToCart(product);
	};
	
	const onRemoveFromCart = (productId: number) => {
		removeFromCart(productId);
	};
	
	return (
		<div>
			<h1>Shopping Cart</h1>
			<div>
				<h2>Available Products</h2>
				<ul>
					{products.map((product) => (
						<li key={product.id}>
							<span>{product.name} - ${product.price}</span>
							<button onClick={() => onAddToCart(product)}>Add to Cart</button>
						</li>
					))}
				</ul>
			</div>
			
			<div>
				<h2>Shopping Cart</h2>
				{items.length === 0 ? (
					<p>Cart is empty</p>
				) : (
					<ul>
						{items.map((item) => (
							<li key={item.id}>
								<span>{item.name} - ${item.price}</span>
								<button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
							</li>
						))}
					</ul>
				)}
			</div>
			
			<div>
				<h3>Total: ${items.reduce((total, item) => total + item.price, 0)}</h3>
			</div>
		</div>
	);
};
