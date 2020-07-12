
import React, {useState, useEffect, useRef} from 'react'

function HookTimer() {
  const [timer, setTimer] = useState(0)

  const interValRef = useRef()

  useEffect(() => {
    interValRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1)
    }, 1000)

    // Clean up function that will run on componentWillUnmount()
    return () => {
      clearInterval(interValRef.current)
    }
  }, [])
  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => clearInterval(interValRef.current)}>Stop Timer</button>
    </div>
  )
}

export default HookTimer