import React from 'react'
import { UserContext, ChannelContext } from '../App'

function ComponentF() {
	return (
		<div>
            <h6>This is from ComponentF using provider and Consumer</h6>
			<UserContext.Consumer>
				{user => {
					return (
						<ChannelContext.Consumer>
							{channel => {
                                 return <div>User context value {user}, channel context value {channel}</div>
							}}
						</ChannelContext.Consumer>
					)
				}}
			</UserContext.Consumer>
		</div>
	)
}

export default ComponentF