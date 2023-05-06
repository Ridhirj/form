import React, { useState } from "react";
import { StepOne, StepTwo, StepThree, StepFour } from "../component/Steps";
import FormSteps from "../component/FormStep";

const Form = () => {
  const [active, setActive] = useState(steps[0]);

  const getActive = () => {
    switch (active) {
      case steps[0]:
        return <StepOne steps={steps} setActive={setActive} />;
      case steps[1]:
        return <StepTwo steps={steps} setActive={setActive} />;
      case steps[2]:
        return <StepThree steps={steps} setActive={setActive} />;
      case steps[3]:
        return <StepFour steps={steps} setActive={setActive} />;
      default:
        return;
    }
  };

  return (
    <div>
      <div>
        <FormSteps steps={steps} active={active} setActive={setActive} />
      </div>
      <div>{getActive()}</div>
    </div>
  );
};

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

export default Form;