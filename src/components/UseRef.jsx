// import React, { useEffect, useRef, useState } from 'react'

// const UseRef = () => {

//   const [value,setValue] = useState(0);
//   // const [render,setRender] = useState(0) //-> infinite rendering

//   const render = useRef(0)


//   useEffect(()=>{
//     // setRender(prev=>prev+1)
//     render.current=render.current+1;
//   })


//   return (
//     <div>
//       <h1>UseRef</h1>
//       <button onClick={()=>{setValue(prev=>prev+1)}}>Badhao</button>
//       <h1>{value}</h1>
//       <button onClick={()=>{setValue(prev=>prev-1)}}>Ghatao</button>
//       <h1>Render count: {render.current}</h1>
      
//     </div>
//   )
// }

// export default UseRef


// accessing the DOM element

// import React, { useRef } from 'react'
// const UseRef = () => {

//   const inputElem = useRef();

//   return (
//     <div>
//       <input type="text"  ref={inputElem}/>
//       <button onClick={()=>{console.log(inputElem.current)}}>Click Here</button>
//     </div>
//   )
// }

// export default UseRef



// examples calculator two input then sum it 


import React, { useRef, useState } from 'react'

const UseRef = () => {

  const [value,setValue] = useState()

  const num1ref = useRef();
  const num2ref = useRef();

  const cal=()=>{
    let a  = Number(num1ref.current.value)
    let b = Number(num2ref.current.value);
    setValue(a+b)
  }

  num1ref.current.value=""
  num2ref.current.value=""

  return (
    <div>
      <input type="number" ref ={num1ref} placeholder="Enter the first number"/>
      <br/>
      <input type="number" ref = {num2ref} placeholder='Enter the second number'/>
      <br/>
      <button onClick={cal}>Sum</button>
      <h1>Sum is {value}</h1>
    </div>
  )
}

export default UseRef


