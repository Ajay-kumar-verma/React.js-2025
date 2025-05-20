import { useEffect } from "react";

import C from "./C"
console.log("File read: B");


function B({counter}) {

console.log("Component called")  

useEffect(()=>{
console.log("Component mounted")
},[])

return(<>
  <h1>
    This is component B: {counter}
  </h1>
  {counter >3 || <C />}
  {counter >10 && <C />}
</>) 
}

export default B;
