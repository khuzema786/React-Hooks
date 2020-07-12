import React, { useState, useEffect } from 'react'

function HookMouse() {
	const [x, setX] = useState(0)
	const [y, setY] = useState(0)

	const logMousePosition = e => {
		console.log('Mouse event')
		setX(e.clientX)
		setY(e.clientY)
	}

    // ---> Empty array as second parameter means that the useEffect will only be called once in beginning that's it
	// useEffect(() => {
	// 	console.log('useFffect called')
    // window.addEventListener('mousemove', logMousePosition)
    // }, [])

    useEffect(() => {
		console.log('useFffect called')
    window.addEventListener('mousemove', logMousePosition)

    // ---> This return function is "cleaup" function that will be called/returned when the component is unmounted
    return () => {
      console.log('Component unmounting code')
      window.removeEventListener('mousemove', logMousePosition)
    }
    }, [])
    // ---> Empty array as second parameter means that the useEffect will only be called once in beginning that's it
    
	return (
		<div>
			Hooks - X - {x} Y - {y}
		</div>
	)
}

export default HookMouse