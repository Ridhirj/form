import React from "react";

export const btnType = ["primary", "secondary"];

const Button = ({ text, dataType, setActive, steps, to, classes }) => {
  return (
    <button
      datatype={dataType}
      onClick={() => setActive(steps[to])}
      className={classes}
    >
      {text}
    </button>
  );
};

export default Button;