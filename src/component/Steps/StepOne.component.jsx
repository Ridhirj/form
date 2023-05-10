import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PageTitle from "../PageTitle";

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
    console.log(values);
    resetForm(initialValues);
    setActive(steps[1])
  }

  return (
    <main>
      <div>
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
                <ErrorMessage component="span" name="name" />
              </div>
              <div>
                <label htmlFor="email">Email Address</label>
                <Field name="email" placeholder="e.g. stephenking@lorem.com" />
                <ErrorMessage component="span" name="email" />
              </div>
              <div>
                <label htmlFor="phone">Phone Number</label>
                <Field name="phone" placeholder="e.g. +1 234 567 890" />
                <ErrorMessage component="span" name="phone" />
              </div>
              <div>
                <button type="submit">Next Step</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </main>
  );
};

export default StepOne;
