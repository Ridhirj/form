import React from "react";
import { usePlan } from "../../context/PlanProvider";
import PageTitle from "../../component/PageTitle"
import PlanCard from "../../component/PlanCard"

const StepThree = () => {
  const { planType, setPlanType } = usePlan();

  return (
    <main>
      <PageTitle heading="Select your plan" subHeading="You have the option of monthly or yearly billing"/>
      
    </main>
  )
};

export default StepThree;
