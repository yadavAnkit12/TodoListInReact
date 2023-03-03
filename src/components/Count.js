import { useState } from "react"

function Count(){
  let [Count,setCount]= useState(0)
  function onclick(){
    setCount(Count+1)
  }
return <>
<h1>{Count}</h1>
<button type="button" onClick={onclick}>Increment</button>
</>
}

export default Count