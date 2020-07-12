import React, { useState } from 'react'

function HookCounterThree() {
	const [name, setName] = useState({ firstName: '', lastName: '' })
	return (
        <>
            <h6>useState with objects</h6>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({ ...name, firstName: e.target.value })} //---> ...name (spread operator) makes a copy of name object and just overrides firstname property
                />
                <input
                    type="text"
                    value={name.lastName}
                    onChange={event => setName({ ...name, lastName: event.target.value })}
                />
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your last name is - {name.lastName}</h2>
                <h2>{JSON.stringify(name)}</h2>
            </form>
        </>
	)
}

export default HookCounterThree