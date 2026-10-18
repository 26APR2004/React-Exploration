import dog from "./assets/dog.jpg"
function Exercise_1()
{
    function callFunction()
  {
    alert("this about my dog...")
  }
  return(
    <div>
      <h1>Sujal Mane and It's Dog Gobi</h1>
       <img src={dog} alt="dog" width="300px" height="300px"/>
        <ul>
          <li>Color : Black</li>
          <li>Breed : Golden Retriever</li>
          <li>Age : 2 years</li>
        </ul>
        <button onClick={callFunction}>Click Me</button>
    </div>
  )
}

export default Exercise_1