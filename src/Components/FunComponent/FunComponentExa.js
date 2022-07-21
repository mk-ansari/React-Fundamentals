import React from "react";
import ClassCompExa from "../ClassComponent/ClassCompExa";

const One = ({ name }) => {
  return <h1> The name is: {name} </h1>;
};

const FunComponentExa = () => {
  return <One name="kamal" />;
};

export default FunComponentExa;
