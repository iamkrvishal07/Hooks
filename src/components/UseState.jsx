// import React, { useState } from 'react'

// const UseState = () => {
//   //let color = "red" ;
//   const [color,setColor] = useState("red")

//   const changeColor = ()=>{
//     // color= "blue"
//     setColor("blue");
//     console.log(color)
//   }

//   return (
//     <div>
//         <h1>UseState</h1>
//         <h1>My fav color is {color}</h1>
//         <button onClick={changeColor}>ChangeColor</button>
//     </div>
//   )
// }

// export default UseState




// Initial value an Object 

// import React, { useState } from 'react'

// const UseState = () => {

//   const [car,setCar] = useState({
//     brand:"ferrari",
//     model:"Roma",
//     year:"2025",
//     color:"red"
//   })

//   const changeColor=()=>{
//     // setCar({
//     //   color:"blue",
//     // })

//     setCar((prev)=>{
//       return {
//         ...prev,color:"blue"
//       }
//     })

//   }


//   return (
//     <div>
//       <h1>My {car.brand}</h1>
//       <h2>It is a {car.brand}</h2>
//       <h3>Car model is {car.model}</h3>
//       <h4>Car year is {car.year} </h4>
//       <h5>Car color is {car.color}</h5>

//       <button onClick={changeColor}>ButtonToChangeColor</button>
      
//     </div>
//   )
// }

// export default UseState





// // counter

// import React, { useState } from 'react'

// const UseState = () => {
//   const [count,setCount]  = useState(0);
//   const updateButton=()=>{
//     // setCount(count+1);
//     // setCount(count+1);
//     // setCount(count+1);
//     setCount(prev=>prev+1);
//     setCount(prev=>prev+1);
//   }

//   return (
//     <div>
//       <h1>Count :{count}</h1>
//       <button onClick={updateButton}>IncreaseKaro</button>
//     </div>
//   )
// }

// export default UseState



// do buuton ek se badhao ek se ghatao

import React, { useState } from 'react'

const UseState = () => {

  const [display,setDisplay] = useState(0);

  const badhao = ()=>{
    setDisplay(prev=>prev+1);
  }
  const ghatao =() =>{
    setDisplay(prev=>prev-1)
  }

  return (
    <div>
      <button onClick={badhao}>BadhaoButton</button>
      <h1>Display number is {display}</h1>
      <button onClick={ghatao}>GhataoButton</button>
      
    </div>
  )
}

export default UseState


