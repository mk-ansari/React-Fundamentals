import React, { useState, useEffect } from "react";

const HooksExa = () => {
  useEffect(() => {
    console.log("Use Effect Call");
  }, []);

  const [counter, setCounter] = useState(0);
  return (
    <div>
      <p> {counter} </p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

export default HooksExa;
