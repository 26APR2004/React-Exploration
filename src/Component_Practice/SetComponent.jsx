import {useState} from "react"
const SetComponent = () => {
     const [count, setCount] = useState(0);
     const [rcount, setRcount] = useState(0);
    return(
        <>
        <h1>{count}</h1>
         <button onClick={() => setCount(count + 1)}>Increment</button>

        <h1>{rcount}</h1>
        <button onClick={() => setRcount(rcount - 1)}>Decrement</button>
        </>
    )
}

export default SetComponent;