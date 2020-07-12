import React, {useState} from 'react'
import useDocumentTitle from '../hooks/useDocumentTitle';

function DocTitleTwo() {
  const [count, setCount] = useState(0)

  // ---> Custom Hook
  useDocumentTitle(count)
  
  return (
    <div>
      <h6>Custom useDocumentTitle() Hook for DocTitleTwo</h6>
      <button onClick={() => setCount(count + 1)}>Count - {count}</button>
    </div>
  )
}

export default DocTitleTwo