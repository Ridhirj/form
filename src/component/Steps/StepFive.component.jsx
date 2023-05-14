import React from "react";
import check from "../../../assets/images/icon-check.svg"

const StepFive = ({step, setActive}) => {
  return (
    <div>
      <img src={check} alt="tick-image" />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};

export default StepFive;