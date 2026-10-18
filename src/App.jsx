// import Header from "./Header"
// import {Login,Setting,id} from "./UserLogin"
// import Exercise_1 from "./Exercise_1"
// import Curly_Brackets from "./Curly_Brackets"
// import Functions from "./Functions"
import SetComponent from "./Component_Practice/SetComponent"
import SetComponent_2 from "./Component_Practice/SetComponent_2"
import {useState} from "react"

function App()
{
  const [fruit, setFruit] = useState("Mango")

  const  setFruitName = () => {
    setFruit("Banana")
  }
  // alert(Counter())
  return(
    <div>
          {/* <Exercise_1/> */}
          {/* <Curly_Brackets/> */}
          {/* <Functions/> */}
          <h1>{fruit}</h1>
          <button onClick={setFruitName}>change fruit name</button>
          {/* <SetComponent/> */}
          <SetComponent_2/>
    </div>
    
  )
}

function Button()
{
  return(
    <>
        <button><abbr title="Next page">Enter</abbr></button>
        {/* <button>Enter</button> */}
    </>
  )
}


function Counter()
{
  return 10+20
}
export default App