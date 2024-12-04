import "./Counter.css"
import {useCounterStore} from "../../store/counterStore.ts";

export const Counter = () => {
	// Optimize performance
	// Selective State Subscription
	const increment = useCounterStore(state => state.increment)
	const decrement = useCounterStore(state => state.decrement)
	const count = useCounterStore(state => state.count )
	
	const onCounterInc = () => {
		increment()
	}
	
	const onCounterDec = () => {
		if (count > 0) decrement()
	}
	
	return (
		<div>
			<h1>Counter</h1>
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

