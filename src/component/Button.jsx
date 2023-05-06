import React from "react";

const Button = ({ text, type, setActive, steps, to }) => {
    return (
        <button
            onClick={() => setActive(steps[2])}>
            {text}
        </button>
    )
};

export default Button;
