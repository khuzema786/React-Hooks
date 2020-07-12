// ---> Import useReducer from 'react
import React, { useReducer } from 'react'

// Defining the parameters for useReducer
const initialState = 0
//---> Action is an instruction to the reducer function
const reducer = (state, action) => {
	switch (action) {
		case 'increment':
			return state + 1
		case 'decrement':
			return state - 1
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterOne() {

    // ---> Array destructuring of 'state and action'
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
    <div>
      <h6>useReducer (simple state & action)</h6>
      <div>Count = {count}</div>
      {/* dispatch(action) basically it dispatches an action */}
      <button onClick={() => dispatch('increment')}>Increment</button>			<button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
	</div>
	)
}

export default CounterOne