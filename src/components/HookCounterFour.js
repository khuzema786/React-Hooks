import React, { useState } from 'react'

function HookCounterFour() {
	const [items, setItems] = useState([])

	const addItem = () => {
		setItems([
			...items,   // ---> Spread operator is used to append new item to the previous items in list, in functions since they do not merge upon themselves
			{
				id: items.length,
				value: Math.floor(Math.random() * 10) + 1   // The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1). Therefore 1 added to it's product with 10 would give a random value between 1 & 10
			}
		])
	}

	return (
		<div>
            <h6>useState with array</h6>
			<button onClick={addItem}>Add a number</button>
			<ul>
				{items.map(item => (
					<li key={item.id}>{item.value}</li>
				))}
			</ul>
		</div>
	)
}

export default HookCounterFour