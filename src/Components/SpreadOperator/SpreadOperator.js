import React from "react";

const SpreadOperator = () => {
  const arr1 = ["apple", "banana", "mango"];
  const arr2 = ["patato", "tomato", "brinjal"];
  const arr3 = [...arr1, ...arr2];
  return (
    <>
      <h1>SpreadOperators</h1>
      {console.log(arr3)}
    </>
  );
};

export default SpreadOperator;
