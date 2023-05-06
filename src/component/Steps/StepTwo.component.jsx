import React from 'react'
import PageTitle from "../PageTitle"
import Button from '../Button'

const StepTwo = ({steps, setActive}) => {
  return (
    <main>
      <div>
        <PageTitle heading="Select your plan" subHeading="You have the option of monthly or yearly billing." />
        <div></div>
        <div>
          <span>Monthly</span>
          <input type="checkbox" />
          <span>Yearly</span>
        </div>
        <div>
          <Button text="Go Back" steps={steps} setActive={setActive} to={0} />
          <Button text="Next Step" steps={steps} setActive={setActive} to={2} />
        </div>
      </div>
    </main>
  )
}

export default StepTwo