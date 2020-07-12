import React, { useRef, useEffect } from 'react'

function FocusInput() {
	const inputRef = useRef(null)
	useEffect(() => {
        // React will set the current property of inputRef to focus
		inputRef.current.focus()
	}, []) // ---> Dependency array empty means function executes only once in start
	return (
		<div>
            <h6>useRef FocusInput</h6>
            {/* Reserve ref attribute is used to attatch a ref onto the element */}
			<input ref={inputRef} type="text" />
		</div>
	)
}

export default FocusInput