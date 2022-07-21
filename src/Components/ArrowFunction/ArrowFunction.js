import React from 'react'

function add (){
    let x=10, y=10;
    return x+y;
}

// const add =()=>{
//     let x=10, y=10;
//     return x+y;
// }

const ArrowFunction = () => {
  return (
    <div>{console.log(add())}</div>
  )
}

export default ArrowFunction