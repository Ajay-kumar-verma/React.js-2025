import { useEffect } from "react";

console.log("File read: C");

function C() {

console.log("Component called")  

useEffect(()=>{
console.log("Component mounted")

return ()=>{
    console.log("Componenet un- Mounted")
}
},[])

return(<>
  <h1>This is component C</h1>
  <></>
</>) 
}

export default C;
