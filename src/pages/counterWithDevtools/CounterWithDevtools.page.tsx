import "./CounterWithDevtools.css"
import {useCounterWithDevtoolsStore} from "../../store/storeWithMiddlewares.ts";

export const CounterWithDevtools = () => {
	const {increment, decrement, count} = useCounterWithDevtoolsStore()
	
	const onCounterInc = () => {
		increment()
	}
	
	const onCounterDec = () => {
		if (count > 0) decrement()
	}
	
	return (
		<div>
			<h1>Counter with devtools</h1>
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

