import React from "react";

const FormStep = ({ steps, active, setActive }) => {
  return (
    <div className="flex flex-col">
      <div>
        {steps.map((item, i) => {
          return (
            <ul key={item}>
              <li onClick={() => setActive(item)}>
                <div>{i + 1}</div>
                <div>{item}</div>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};

export default FormStep;