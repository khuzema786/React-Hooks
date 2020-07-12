// ---> Import useReducer from 'react
import React, { useReducer } from 'react'

// Defining the parameters for useReducer
const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
//---> Action is an instruction to the reducer function
const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			return {...state, firstCounter: state.firstCounter + action.value}
		case 'decrement':
            return {...state, firstCounter: state.firstCounter - action.value}
        case 'increment2':
            return {...state, secondCounter: state.secondCounter + action.value}
        case 'decrement2':
            return {...state, secondCounter: state.secondCounter - action.value}
		case 'reset':
			return initialState
		default:
			return state
	}
}

function CounterTwo() {

    // ---> Array destructuring of 'state and action'
	const [count, dispatch] = useReducer(reducer, initialState)

	return (
    <div>
      <h6>useReducer (Complex state & action)</h6>
      <div>First Counter = {count.firstCounter}</div>
      <div>Second Counter = {count.secondCounter}</div>
      {/* dispatch(action) basically it dispatches an action */}
      <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>			
      <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
      {/* Increment & Decrement value by 5 */}
      <button onClick={() => dispatch({type: 'increment', value: 5})}>Increment 5</button>			
      <button onClick={() => dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
      <div>
        <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment Counter 2</button>			
        <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement Counter 2</button>
      </div>
      <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
	</div>
	)
}

export default CounterTwo