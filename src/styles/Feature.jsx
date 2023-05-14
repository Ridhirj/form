import React from "react";
import styled from "styled-components";
import { usePlan } from "../context/PlanProvider";

const Grid = styled.label`
  display: grid;
  grid-template-column: 2rem 1fr 2rem;
`;

const Feature = ({ title, subTitle, rate, checked, setChecked }) => {
  const { planType } = usePlan();

  const getRate = () => {
    const amount = planType === "mo" ? `+$${rate}/mo` : `+$${rate * 10}/yr`;
    return amount;
  };

  return (
    <Grid>
      <div>
        <input
          type="checkbox"
          name="online-services"
          id="onlineServices"
          checked={checked}
          onChange={setChecked}
        />
      </div>
      <div>
        <span>{title}</span>
        <span>{subTitle}</span>
      </div>
      <div>{getRate()}</div>
    </Grid>
  );
};

export default Feature;