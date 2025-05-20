import { useEffect, useState } from "react";

import B from "./B"
console.log("File read: App");

function App() {  
console.log("Component called")  
const [counter,setCounter] = useState(0);

useEffect(()=>{
console.log("Component mounted")
},[])
  return(
  <>
   <h1>Counter: {counter}</h1>
   <h1>This is React App </h1>
   <B counter={counter}/>
   <button onClick={()=>{setCounter(counter+1)}}>Counter</button>
  </>
  ) 
}

export default App;
