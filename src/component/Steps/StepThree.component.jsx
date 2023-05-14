import React, { useEffect, useState } from "react";
import { usePlan } from "../../context/PlanProvider";
import PageTitle from "../../component/PageTitle";
import Feature from "../../styles/Feature";
import Button from "../Button";
import { actions } from "../../context/PlanProvider";

const StepThree = ({ steps, setActive }) => {
  const { addons, dispatch } = usePlan();

  return (
    <main>
      <PageTitle
        heading="Pick add-ons"
        subHeading="Add-ons help enchance your gaming experience"
      />

      <div>
        <Feature
          title={actions[0]}
          subTitle="Access to multiplayer games"
          rate={1}
          checked={addons.addon0}
          setChecked={() => dispatch({action: actions[0]})}
        />
        <Feature
          title={actions[1]}
          subTitle="Extra 1TB of cloud save"
          rate={2}
          checked={addons.addon1}
          setChecked={() => dispatch({action: actions[1]})}
        />
        <Feature
          title={actions[2]}
          subTitle="Custom theme on your profile"
          rate={2}
          checked={addons.addon2}
          setChecked={() => dispatch({action: actions[2]})}
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