import React from 'react'
import useCounter from '../hooks/useCounter'

function CounterTwoCustom() {
	const [count, increment, decrement, reset] = useCounter(10, 10)

	return (
		<div>
			<h2>Count = {count}</h2>
			<button onClick={increment}>Increment 10</button>
			<button onClick={decrement}>Decrement 10</button>
			<button onClick={reset}>Reset</button>
		</div>
	)
}

export default CounterTwoCustom