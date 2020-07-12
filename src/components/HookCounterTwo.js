import React, { useState } from 'react'

function HookCounterTwo() {
	const initialCount = 0
	const [count, setCount] = useState(initialCount)
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
            // setCount(count+1) // ---> This creates a redundant state, so count is just incremented by 1 & not 5

            // To eliminate the above incorrectness we use a function that stores our previous count and then increments in correctly
			setCount(prevCount => prevCount + 1)
		}
	}
	return (
		<>
            <h6>Using useState with prevCount</h6>
			Count: {count}
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(prevCount => prevCount + 1)}>
				Increment
			</button>
			<button onClick={() => setCount(prevCount => prevCount - 1)}>
				Decrement
			</button>
			<button onClick={incrementFive}>Increment 5</button>
		</>
	)
}

export default HookCounterTwo