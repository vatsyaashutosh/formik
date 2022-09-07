import React from "react";
import {
  Br,
  ErrorContainer,
  Input,
  Label,
  SignupContainer,
  SignupElementContainer,
  SignupForm,
  SignupHeading,
  SubmitButton,
} from "./style";
import { useFormik } from "formik";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Required")
    .matches(/^^[a-zA-Z ]*$/, "Should contain only alphabets"),
  email: Yup.string().email("Invalid Email address").required("Required"),
  password: Yup.string().min(8).required("Required"),
});
const Signup = () => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema,
  });
  return (
    <SignupContainer>
      <SignupHeading>Signup Form</SignupHeading>
      <SignupForm onSubmit={formik.handleSubmit}>
        <SignupElementContainer>
          <Label htmlFor="name">Name</Label>

          <Input
            onChange={formik.handleChange}
            value={formik.values.name}
            name="name"
            id="name"
            type="text"
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <ErrorContainer> {formik.errors.name} </ErrorContainer>
          ) : null}
        </SignupElementContainer>

        <SignupElementContainer>
          <Label htmlFor="email">Email</Label>

          <Input
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            id="email"
            type="text"
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <ErrorContainer> {formik.errors.email} </ErrorContainer>
          ) : null}
        </SignupElementContainer>

        <SignupElementContainer>
          <Label htmlFor="password">Password</Label>

          <Input
            value={formik.values.password}
            name="password"
            id="password"
            onChange={formik.handleChange}
            type="password"
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <ErrorContainer> {formik.errors.password} </ErrorContainer>
          ) : null}
        </SignupElementContainer>
        <SignupElementContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </SignupElementContainer>
      </SignupForm>
    </SignupContainer>
  );
};

export default Signup;
