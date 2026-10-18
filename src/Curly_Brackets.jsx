function Curly_Brackets()
{
    // Variable
    const name = "Sujal Mane";
    //Operation
    let a=10;
    let b=20;
;   //Function
    function fruit()
    {
        return "Mango";
    }

    // Parameters function
    function sub(a,b)
    {
        return a-b;
    }

    // Operation Function
    function operation(a,b,op)
    {
        if(op=="+")
        {
            return a+b;
        }
        else if(op=="-")
        {
            return a-b;
        }
        else
            return "Invalid Operation";
    }

    // User Object
    const userobj = {
        name:"Sujal Mane",
        age:22,
        email:"sujalmane@example.com"
    };

    // Array
    const fruits = ["Mango","Banana","Apple","Grapes"];

    // Url variable
    const url = "https://media.licdn.com/dms/image/v2/D4D12AQGgMCavCcCbEg/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1711086616356?e=2147483647&v=beta&t=1N65UooE_qsxL1jn9bwI0x1CFp7-czZxArntN8jCIps"
    return(
        <div>
            <h1>Curly Brackets</h1>
            <p>Curly brackets are used in programming languages to define blocks of code. They are often used to group statements together, such as in functions, loops, and conditionals. In JavaScript, for example, curly brackets are used to define the body of a function or the contents of an object.</p>
            <h3>My Name is :{name} </h3>
            <h3>Sum of {a} and {b} is : {a+b}</h3>
            <h3>Fruit: {fruit()}</h3>
            <h3>Subtraction of {a} and {b} is : {sub(a,b)}</h3>
            <h3>Operation of {a} and {b} is : {operation(a,b,"+")}</h3>
            <h3>User: {userobj.name}, Age: {userobj.age}, Email: {userobj.email}</h3>
            <h3>Fruits : {fruits[0]}</h3>
            <input type="text" placeholder="Enter your name"/><br/>
            <img src={url} alt="LinkedIn" width="300px" height="300px"/>
            <br/>
            
        </div>
    ) 
}

export default Curly_Brackets