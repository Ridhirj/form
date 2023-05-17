import React from "react";

const FormStep = ({ steps, active, setActive }) => {
  return (
    <div className="steps">
      <div className="flex flex-col">
        <ul className="step-container flex-mobile-only">
          {steps.map((item, i) => {
            return (
              <>
                {i !== steps.length - 1 && (
                  <li
                    className="list items-center"
                    key={item}
                    onClick={() => setActive(item)}
                  >
                    <div className={`dots ${active === item && "active-list"}`}>
                      {i + 1}
                    </div>
                    <div className="flex flex-col hide-mobile-only">
                      <span className="fade-text">STEP {i + 1}</span>
                      <span className="form-step-name">{item}</span>
                    </div>
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FormStep;