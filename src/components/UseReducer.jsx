// import React, { useReducer, useState } from 'react'

// const UseReducer = () => {


//    const intialState = {count:0}
//   // const [count,setCount] = useState(0)

//   const reducer = (state,action)=>{
//     return {count:state.count+1}
//   }
//   const [state,dispatch]=useReducer(reducer,intialState)

//   return (
//     <div>
//         <h1>UseReducer</h1>
//         <button onClick={()=>dispatch()}>Increase</button>
//         <button onClick={()=>{dispatch()}}>Decrease</button>
//         <h2>{state.count}</h2>
//     </div>
//   )
// }

// export default UseReducer







import React, { useReducer, useState } from 'react'

const UseReducer = () => {


   const intialState = {count:0}
  // const [count,setCount] = useState(0)


  const reducer = (state,action)=>{
    switch(action.type){
      case 'increase' :{
          return {count:state.count+1}
      }
      case 'decrease' :{
          return {count:state.count-1}
      }
      default : {
        return state
      }

    }
    
  }
  const [state,dispatch]=useReducer(reducer,intialState)

  return (
    <div>
        <h1>UseReducer</h1>
        <button onClick={()=>dispatch({type:'increase'})}>Increase</button>
        <button onClick={()=>{dispatch({type:'decrease'})}}>Decrease</button>
        <h2>{state.count}</h2>
    </div>
  )
}

export default UseReducer

