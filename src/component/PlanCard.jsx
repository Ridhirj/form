import React from "react";
import { usePlan } from "../context/PlanProvider";

const PlanCard = ({ icon, name, planRate, freebies }) => {
  const { planType } = usePlan();

  const getRate = () => {
    let rate = "";
    if (planType === "monthly") {
      rate = `${planRate}/mo`
    } else {
      rate = `${planRate * 10}/yr`
    }
    return rate
  }

  const freeby = planType === "monthly" ? "" : freebies;

  return (
    <div>
      <div>
        <img src={icon} alt="icon-svg" />
      </div>
      <div>
        <span>{name}</span>
        <span>&#36;
          {getRate()}
        </span>
        <span>{freeby}</span>
      </div>
    </div>
  );
};

export default PlanCard;