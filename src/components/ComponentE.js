import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../App'

function ComponentE() {

  // ---> By using context hook
  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
    <> 
        <h6>This is from ComponentE using context-hook</h6>
        User is {user} and channel is {channel}
        <ComponentF />
    </>
  )
}

export default ComponentE