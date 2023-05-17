import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageTitle from "../PageTitle";
import Button from "../Button";
import { btnType } from "../Button";

const StepOne = ({ steps, setActive }) => {

  const initialValues = {
    name: "",
    email: "",
    phone: "",
  };

  const validation = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string().email("Invalid email format").required("This field is required"),
    phone: Yup.number().typeError('This field is a number').required("This field is required")
  })

  const handleSubmit = (values, resetForm) => {
    resetForm(initialValues);
    setActive(steps[1])
  }

  return (
    <main>
      <div className="column-2">
      <PageTitle heading="Personal info" subHeading="Please provide your name, email address, and phone number." />
      
        <Formik
          initialValues={initialValues}
          validationSchema={validation}
          onSubmit={(values, {resetForm}) => handleSubmit(values, resetForm)}
        >
          {() => (
            <Form>
              <div>
                <label htmlFor="name">Name</label>
                <Field name="name" placeholder="e.g. Stephen King" />
                <ErrorMessage className="error" component="span" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <Field name="email" placeholder="e.g. stephenking@lorem.com" />
                <ErrorMessage className="error" component="span" name="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <Field name="phone" placeholder="e.g. +1 234 567 890" />
                <ErrorMessage className="error" component="span" name="phone" />
              </div>
              <div className="flex justify-center items-end mt">
                <Button
                  type="submit"
                  datatype={btnType[0]}
                  classes="button"
                  text="Next Step"
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default StepOne;
