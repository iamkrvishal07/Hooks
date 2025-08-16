import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count,setCount] = useState(0)
        useEffect(()=>{
            setTimeout(()=>{
                setCount(prev=>prev+1)
            },1000)
        },[count])

       // console.log("I am re-rending ")

  return (
    <div>
        <h1>UseRef</h1>
        <h2>It rendered {count} times ! </h2>
      
    </div>
  )
}

export default UseEffect


// when we use Empty array [] , it will execute only onces.
// [...] -> only execute when count changes
