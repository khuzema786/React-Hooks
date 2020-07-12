import React from 'react'

function Button({ handleClick, children }) {
  console.log('Rendering button - ', children)
  return (
    <button onClick={handleClick}>
      {/* children props consists the inner html inside ths calling component */}
      {children}
    </button>
  )
}

export default React.memo(Button)