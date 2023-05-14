import React from "react";
import PageTitle from "../../component/PageTitle";
import { usePlan } from "../../context/PlanProvider";
import Button from "../Button";
import { planName } from "../../context/PlanProvider";
import { actions } from "../../context/PlanProvider";

const StepFour = ({ steps, setActive }) => {
  const {
    planType,
    setPlanType,
    plan,
    setPlan,
    planRate,
    addonsRate,
    addons,
    dispatch,
  } = usePlan();

  // console.log(addons, addonsRate);

  const getPlanType = () => {
    const remainingLetters = planType === "mo" ? "onthly" : "early";
    const firstLetter = planType.charAt(0).toUpperCase();
    return `(${firstLetter}${remainingLetters})`;
  };

  const getFormattedRate = (rate) => {
    return `$${rate}/${planType}`;
  };

  const getTotal = () => {
    let total = 0;
    const keys = Object.keys(addons);

    addonsRate.map((rate, i) => {
      if (addons[keys[i]] === true) {
        total += rate;
      }
    });

    total += planRate[plan];
    return getFormattedRate(total);
  };

  const getAddons = () => {
    const keys = Object.keys(addons);
    const formattedAddons = actions.map((name, i) => {
      if (addons[keys[i]] === true) {
        return { name, rate: addonsRate[i] };
      }
    });

    return (
      <>
        {formattedAddons.map((addon, i) => {
          return (
            addon !== undefined && (
              <div key={addon.name}>
                <span>{addon.name}</span>
                <span>{getFormattedRate(addon.rate)}</span>
              </div>
            )
          );
        })}
      </>
    );
  };

  return (
    <div>
      <PageTitle />
      <div>
        <div>
          <div>
            <span>
              {planName && planName[plan]} {planType && getPlanType()}
            </span>
          </div>
          <div>
            <span>{getFormattedRate(planRate[plan])}</span>
          </div>
        </div>

        <div>
          {getAddons()}
        </div>

        <div>
          <div>
            <span>
              Total (per {`${planType === "mo" ? "month" : "year"}`} )
            </span>
          </div>
          <div>{getTotal()}</div>
        </div>

        <div>
        <Button text="Go Back" to={2} type="" setActive={setActive} steps={steps} />
        <Button text="Confirm" to={4} type="" setActive={setActive} steps={steps} />
        </div>
      </div>
    </div>
  );
};

export default StepFour;