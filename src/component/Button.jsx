import React from "react";

const Button = ({ text, type, setActive, steps, to }) => {
    return (
        <button
            onClick={() => setActive(steps[to])}>
            {text}
        </button>
    )
};

export default Button;
