import React, { useEffect, useState } from "react";
import { usePlan } from "../../context/PlanProvider";
import PageTitle from "../../component/PageTitle";
import Feature from "../../styles/Feature";
import Button from "../Button";

const StepThree = ({ steps, setActive }) => {
  const { addon, addon2, addon3, setAddon, setAddon2, setAddon3 } = usePlan();

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
          checked={addon}
          setChecked={setAddon}
        />
        <Feature
          title="Larger storage"
          subTitle="Extra 1TB of cloud save"
          rate={2}
          checked={addon2}
          setChecked={setAddon2}
        />
        <Feature
          title="Customizable profile"
          subTitle="Custom theme on your profile"
          rate={2}
          checked={addon3}
          setChecked={setAddon3}
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