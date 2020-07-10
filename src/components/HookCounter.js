import React, {useState} from 'react'

function HookCounter() {

  // --- Array Destructuring with a state named 'count' & a method 'setCount' to setState ---
  const [count, setCount] = useState(0) // ---> useState(0) sets the initial count to 0

  return (
    <div>
      <h6>Using functional Component & useHooks</h6>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter