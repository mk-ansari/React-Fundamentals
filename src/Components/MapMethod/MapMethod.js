import React from "react";

const MapMethod = () => {
  const arr = ["kamal", "ravi", "aashish", "abhi"];
  return (
    <div>
      {arr.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
};

export default MapMethod;
