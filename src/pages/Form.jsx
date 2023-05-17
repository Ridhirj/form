import React, { useState } from "react";
import { StepOne, StepTwo, StepThree, StepFour, StepFive } from "../component/Steps";
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
      case steps[4]:
        return <StepFive steps={steps} setActive={setActive} />;
      default:
        return;
    }
  };

  return (
    <section className="section">
      <div className="container p">
      <div>
        <FormSteps steps={steps} active={active} setActive={setActive} />
      </div>
      <div>{getActive()}</div>
      </div>
    </section>
  );
};

const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY", "Thank You"];

export default Form;