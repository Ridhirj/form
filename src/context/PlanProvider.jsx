import React, { createContext, useContext, useState } from "react";

export const PlanContext = createContext();

export const usePlan = () => {
  return useContext(PlanContext);
};

const PlanProvider = ({ children }) => {
  const [planType, setPlanType] = useState("mo");
  const [plan, setPlan] = useState(0)
  const [addon, setAddon] = useState(false);
  const [addon2, setAddon2] = useState(false);
  const [addon3, setAddon3] = useState(false);

  const planRate =
    planType === "mo" ?
      [9, 12, 15] :
      [90, 120, 150];

  const value = {
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
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export const planName = ["Arcade", "Advanced", "Pro"];
export default PlanProvider;