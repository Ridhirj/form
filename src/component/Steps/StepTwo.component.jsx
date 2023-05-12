import React, { useEffect, useState } from "react";
import PageTitle from "../PageTitle";
import Button from "../Button";
import PlanCard from "../../component/PlanCard";
import { usePlan } from "../../context/PlanProvider";
import arcade from "../../../assets/images/icon-arcade.svg";
import advanced from "../../../assets/images/icon-advanced.svg";
import pro from "../../../assets/images/icon-pro.svg";
import ToggleSwitch from "../../styles/ToggleSwitch.jsx";
import { planName } from "../../context/PlanProvider";

const StepTwo = ({ steps, setActive }) => {
  const { planType, setPlanType, planRate } = usePlan();
  const [checked, setChecked] = useState(() => {
    return planType === "yr";
  });

  useEffect(() => {
    const plan = checked ? "yr" : "mo";
    setPlanType(plan);
  }, [checked]);

  return (
    <main>
      <div>
        <PageTitle
          heading="Select your plan"
          subHeading="You have the option of monthly or yearly billing."
        />
        <div>
          <PlanCard
            name={planName[0]}
            planRate={`${planRate[0]}/${planType}`}
            freebies="2 months free"
            icon={arcade}
          />
          <PlanCard
            name={planName[1]}
            planRate={`${planRate[1]}/${planType}`}
            freebies="2 months free"
            icon={advanced}
          />
          <PlanCard
            name={planName[2]}
            planRate={`${planRate[2]}${planType}`}
            freebies="2 months free"
            icon={pro}
          />
        </div>
        <div>
          <span>Monthly</span>
          <ToggleSwitch
            checked={checked}
            setChecked={(e) => setChecked(e.target.checked)}
          />
          <span>Yearly</span>
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