import Header from "./Header"
import {Login,Setting,id} from "./UserLogin"
function App()
{
  // alert(Counter())
  return(
    <div>
        <h1>Hello {id}</h1>
        <h2>React step by step {Counter()}</h2>
        <Header/>
        <Button/>
        <Login/>
        <Setting/>
        
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