import React, { useEffect, useState } from "react";
import { usePlan } from "../../context/PlanProvider";
import PageTitle from "../../component/PageTitle";
import Feature from "../../styles/Feature";
import Button from "../Button";

const StepThree = ({ steps, setActive }) => {
  const { planType, setPlanType } = usePlan();
  const [checked, setChecked] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);

  return (
    <main>
      <PageTitle
        heading="Pick add-ons"
        subHeading="Add-ons help enchance your gaming experience"
      />

      <div>
        <Feature
          title="Online services"
          subTitle="Access to multiplayer games"
          rate={1}
          checked={checked}
          setChecked={setChecked}
        />
        <Feature
          title="Larger storage"
          subTitle="Extra 1TB of cloud save"
          rate={2}
          checked={checked2}
          setChecked={setChecked2}
        />
        <Feature
          title="Customizable profile"
          subTitle="Custom theme on your profile"
          rate={2}
          checked={checked3}
          setChecked={setChecked3}
        />
      </div>

      <div>
        <div>
          <Button text="Go Back" setActive={setActive} steps={steps} to={1} />
          <Button text="Next Step" setActive={setActive} steps={steps} to={3} />
        </div>
      </div>
    </main>
  );
};

export default StepThree;