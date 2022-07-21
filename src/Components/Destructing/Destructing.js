import React from 'react'

const Destructing = () => {
  const arr = ["apple", "patato", "mango_juicy"];
  const vehicle = {
    brand: 'Ford',
    model: 'Mustang',
    type: 'car',
    year: 2021, 
    color: 'red'
  }
  const [fruits, vegetable, juice] = arr;
  const {brand, model, type}= vehicle;
  return (
    <>
        <div>{`${fruits}, ${vegetable}, ${juice}`}</div>
        <div>{`${brand}, ${model}, ${type}`}</div>
    </>
  )
}

export default Destructing