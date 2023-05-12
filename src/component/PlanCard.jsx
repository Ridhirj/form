import React from "react";
import { usePlan } from "../context/PlanProvider";

const PlanCard = ({ icon, name, planRate, freebies }) => {
  const { planType } = usePlan();

  const freeby = planType === "mo" ? "" : freebies;

  return (
    <div>
      <div>
        <img src={icon} alt="icon-svg" />
      </div>
      <div>
        <span>{name}</span>
        <span>&#36;
          {planRate}
        </span>
        <span>{freeby}</span>
      </div>
    </div>
  );
};

export default PlanCard;