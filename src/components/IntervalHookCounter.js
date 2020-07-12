import React, {useState, useEffect} from 'react'

function IntervalHookCounter() {
  const someProps = "Some props dependency to run on componentDidMount"  
  const [count, setCount] = useState(0)

//   const tick = () => {
//     setCount(count + 1)
//   }

   const tick = () => {
     setCount(prevCount=>prevCount + 1)
   }

// ---> Better to define function inside use effect so that you dont forget that someProps is a dependency   
//    function doSomething() {
//        console.log(someProps)
//    }

  useEffect(() => {

    function doSomething() {
        console.log(someProps)
    }
    doSomething()

    const interval = setInterval(tick, 1000)
    
    // ComponentWillUnmount
    return () => {
      clearInterval(interval)
    }
    }, 
    // [count] // Since prevCount keeps track of previous counts, we don't need count as a dependency
    [someProps]
    )
  return (
    <div>
      <h6>React hooks for interval IntervalHookCounter</h6>
      {count}
    </div>
  )
}

export default IntervalHookCounter