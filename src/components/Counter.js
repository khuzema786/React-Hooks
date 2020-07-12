import React, { useState, useMemo } from 'react'

function Counter() {
	const [counterOne, setCounterOne] = useState(0)
	const [counterTwo, setCounterTwo] = useState(0)

	const incrementOne = () => {
		setCounterOne(counterOne + 1)
	}

	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1)
    }

//   const isEven = () => {
//     return counterOne % 2 === 0
//   }

   // ---> It will only make this slow calculation when couterOne is changed, for better optimization
   // ---> As for counterTwo is concerned, it will simply consider the CACHED value for computattion, without compromising with performance 
   const isEven = useMemo(() => {
     let i = 0
     while (i < 2000000000) i++
     return counterOne % 2 === 0
   }, [counterOne])

	return (
		<div>
            <h6>useMemo</h6>
			<div>
                <button onClick={incrementOne}>Count One - {counterOne}</button>
                <span>{isEven ? 'Even' : 'Odd'}</span>
			</div>
			<div>
                <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
			</div>
		</div>
	)
}

export default Counter