function Functions() {

    // Normal Function
    function functionOne() {
        alert("Function One called!");
    }

    //Arrow Function
    const functionTwo = () => {
        alert("Function Two called!");
    }

    //Parameter Function
    function functionThree(param) {
        alert("Function Three called with parameter: " + param);
    }
  return (
    <div>
      <h1>Functions</h1>
      <p>This is the Functions component.</p>
      <button onClick={functionOne}>Call Function One</button>
      <button onClick={functionTwo}>Call Function Two</button>
      <button onClick={() => functionThree("Hello")}>Call Function Three</button>
    </div>
  );
}

export default Functions;