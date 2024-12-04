import "./CounterWithStorage.css"
import {useCounterWithStorageStore} from "../../store/storeWithMiddlewares.ts";

export const CounterWithStorage = () => {
	const {increment, decrement, count} = useCounterWithStorageStore()
	
	const onCounterInc = () => {
		increment()
	}
	
	const onCounterDec = () => {
		if (count > 0) decrement()
	}
	
	return (
		<div>
			<h1>Counter with storage</h1>
			<div className="buttons">
				<button onClick={onCounterInc}>
					🔼 increase
				</button>
				<button onClick={onCounterDec}>
					🔽 decrease
				</button>
			</div>
			<div>
				count is {count}
			</div>
		</div>
	);
}

