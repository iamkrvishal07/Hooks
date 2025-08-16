import React, { useMemo, useState } from 'react'

const UseMemo = () => {

        const [number , setNumber] = useState(0)
        const [counter,setCounter] = useState(0)

        function cubeNum(num){
            console.log("Calculation Done ! ")
            return Math.pow(num,3)
        }
        // const res = cubeNum(number)
        const res = useMemo(()=>cubeNum(number),[number])


  return (
    <div>
        <h1>UseMemo</h1>
        <input type="number" placeholder ='Enter the number' value={number}
        onChange={(e)=>{setNumber(e.target.value)}}/>
        <br/>
        <h1>Cube of the number is {res}</h1>
        <br/>
        <button onClick={()=>{setCounter(counter+1)}}>Counter++</button>
        <h1>Counter : {counter}</h1>
    </div>
  )
}

export default UseMemo
