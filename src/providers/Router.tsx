import {Route, Routes} from "react-router-dom";
import {Counter} from "../pages/counter/Counter.page.tsx";
import {MainLayout} from "../pages/MainLayout.tsx";
import {AppLinks} from "../constants/appLinks.constants.ts";
import {CounterWithDevtools} from "../pages/counterWithDevtools/CounterWithDevtools.page.tsx";
import {CounterWithStorage} from "../pages/counterWithStorage/CounterWithStorage.page.tsx";
import {Cart} from "../pages/cart/Cart.page.tsx";


export const Router = () => {
	
	return (
		<Routes>
			<Route path="/" element={<MainLayout/>}>
				<Route path={AppLinks.COUNTER} element={<Counter/>}/>
				<Route path={AppLinks.COUNTER_WITH_STORAGE} element={<CounterWithStorage/>}/>
				<Route path={AppLinks.COUNTER_WITH_DEVTOOLS} element={<CounterWithDevtools/>}/>
				<Route path={AppLinks.CART} element={<Cart/>}/>
			</Route>
		</Routes>
	)
}