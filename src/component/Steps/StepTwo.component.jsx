import React, { useState } from "react";
import PageTitle from "../PageTitle";
import Button from "../Button";
import PlanCard from "../../component/PlanCard";
import { usePlan } from "../../context/PlanProvider";
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import ToggleSwitch from "../../styles/ToggleSwitch.jsx";

const StepTwo = ({ steps, setActive }) => {
  const { planType, setPlanType } = usePlan();
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    const plan = toggle ? "yearly":"monthly"
    setPlanType(plan);
  }

  return (
    <main>
      <div>
        <PageTitle
          heading="Select your plan"
          subHeading="You have the option of monthly or yearly billing."
        />
        <div>
          <PlanCard
            name="Arcade"
            planRate={9}
            freebies="2 months free"
            icon={arcade}
          />
          <PlanCard
            name="Advanced"
            planRate={12}
            freebies="2 months free"
            icon={advanced}
          />
          <PlanCard
            name="Pro"
            planRate={15}
            freebies="2 months free"
            icon={pro}
          />
        </div>
        <div>
        <ToggleSwitch />
        </div>
        <div>
          <Button text="Go Back" steps={steps} setActive={setActive} to={0} />
          <Button text="Next Step" steps={steps} setActive={setActive} to={2} />
        </div>
      </div>
    </main>
  );
};

export default StepTwo;
