import { useEffect, useState } from "react";
import useStore from "./store"

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
   <button onClick={()=>{setCounter(counter=>counter+1);setCounter(counter=>counter+1);}}>Counter</button>
   <BearCounter />
   <Controls />
  </>
  ) 
}

export default App;


function BearCounter() {
  const bears = useStore((state) => state.bears)
   console.log("Bear")
  useEffect(()=>{
    console.log("Bear count has been called")
   },[])

  return <h1>{bears} bears around here...</h1>
}

function Controls() {
  const increasePopulation = useStore((state) => state.increasePopulation)
  console.log("Controal")
  
  useEffect(()=>{
    console.log("Controls has been called")
   },[])

  return <button onClick={()=>increasePopulation()}>one up</button>
}
