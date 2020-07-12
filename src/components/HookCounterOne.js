import React, { useState, useEffect } from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    // ---> useEffect basically asks react to execute the function inside it everytime this cunctional component is rendered
    // ---> 1st paramemter is the piece of code executed on every re-render & 2nd parameter is the condition if the piece of code should be executed or not
	useEffect(() => {
		console.log('useEffect - Updating document title ')
		document.title = `You clicked ${count} times`
	},[count])  // ---> If the 2nd parameter count array undergoes any change, the function in parameter 1 gets executed
	
	return (
		<div>
            <input 
                type="text" 
                value={name} 
                onChange={e => setName(e.target.value)} />
			<button onClick={() => setCount(count + 1)}>
				useEffect - Click {count} times
			</button>
		</div>
	)
}

export default HookCounterOne