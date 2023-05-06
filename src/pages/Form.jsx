import React, { useState } from "react";
import { StepOne, StepTwo, StepThree, StepFour } from "../component/Steps";
import FormSteps from "../component/FormStep";

const Form = () => {
  const [active, setActive] = useState(steps[0]);

  const getActive = () => {
    switch (active) {
      case steps[0]:
        return <StepOne />;
      case steps[1]:
        return <StepTwo />;
      case steps[2]:
        return <StepThree />;
      case steps[3]:
        return <StepFour />;
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