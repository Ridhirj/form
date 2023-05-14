import React, { createContext, useContext, useReducer, useState } from "react";

export const PlanContext = createContext();

export const usePlan = () => {
  return useContext(PlanContext);
};

const PlanProvider = ({ children }) => {
  const [planType, setPlanType] = useState("mo");
  const [plan, setPlan] = useState(0);

  
  const reducer = (state,{ action }) => {
    switch (action) {
      case actions[0]:
        return {
          ...state,
          addon0: !state.addon0
        }
      case actions[1]:
        return {
          ...state,
          addon1: !state.addon1
        }
      case actions[2]:
        return {
          ...state,
          addon2: !state.addon2
        }
    }
  } 

  const [addons, dispatch] = useReducer(reducer, {
    addon0: false,
    addon1: false,
    addon2: false,
  });

  const planRate = planType === "mo" ? [9, 12, 15] : [90, 120, 150];
  const addonsRate = planType === "mo" ? [1, 2, 2] : [10, 20, 20];

  const value = {
    planType,
    setPlanType,

    plan,
    setPlan,
    
    planRate,
    addonsRate,

    addons,
    dispatch,
  };

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
};

export const planName = ["Arcade", "Advanced", "Pro"];
export const actions = ["Online service", "Larger storage", "Customizable profile"];
export default PlanProvider;
