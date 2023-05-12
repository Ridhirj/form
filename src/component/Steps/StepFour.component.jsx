import React from "react";
import PageTitle from "../../component/PageTitle";
import {usePlan} from "../../context/PlanProvider";
import Button from "../Button";
import { planName } from "../../context/PlanProvider";

const StepFour = ({ steps, setActive }) => {
  const {
    planType,
    setPlanType,
    plan,
    setPlan,
    planRate,
    addon,
    addon2,
    addon3,
    setAddon,
    setAddon2,
    setAddon3,
  } = usePlan();

  const getPlanType = () => {
    const firstLetter = planType.charAt(0).toUpperCase();
    const remainingLetters = planType.substring(1);
    return `(${firstLetter}${remainingLetters})`;
  }

  const getTotal = () => {
    
  }

  return (
    <div>
      <PageTitle />
      <div>

        <div>

          <div>
            <span>
            {planName && planName[plan]} {planType && getPlanType()}
            </span>
          </div>
          <div>
            <span>
            &#36;
            {planRate[plan]}
            </span>
          </div>

        </div>

        <div>

        </div>

      </div>
    </div>
  );
};

export default StepFour;