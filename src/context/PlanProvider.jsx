import React, { createContext, useContext, useState } from "react";

export const PlanContext = createContext();

export const usePlan = () => {
  return useContext(PlanContext);
};

const PlanProvider = ({ children }) => {
  const [planType, setPlanType] = useState("monthly");

  const value = {
    planType,
    setPlanType,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export default PlanProvider;