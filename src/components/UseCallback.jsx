import React, { useCallback, useState } from 'react'
import NavBar from '../pages/NavBar'

const UseCallback = () => {

    const [counter,setCounter] = useState(0)
    // const newFn = ()=>{}
    const newFn = useCallback(()=>{},[])
  return (
    <div>
        <NavBar newFn={newFn}/>
        <h1>UseCallBack</h1>
        <h1>Counter : {counter}</h1>
        <br/>
        <button onClick={()=>{setCounter(prev=>prev+1)}}>CounterBtn</button>

      
    </div>
  )
}

export default UseCallback
