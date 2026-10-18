import React, { useState } from 'react'
import '../App.css';
const SetComponent_2 = () => {
    const [count, setCount] = useState(0)

    function fcounter()
    {
        setCount(count + 1)
    }
    function rcounter()
    {
        setCount(count - 1)
    }


  return (
    <div className='button_style'>
          <h2>Use of Set component for Decrement and Increment </h2>
          <h2>{count}</h2>
          <button onClick={fcounter}>Increment</button>
          <button onClick={rcounter}>Decrement</button>
           
    </div>
  )
}

export default SetComponent_2
