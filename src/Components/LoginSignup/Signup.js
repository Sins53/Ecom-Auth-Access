import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import * as Yup from "yup";
import Validation from "../Error";
import useApi from "../../CustomHooks/useApi";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Please Enter UserName"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Please enter Email"),
  password: Yup.string().required("Please Enter Password"),
  confirmPassword: Yup.string().when("password", {
    is: (val) => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password")],
      "Both password need to be the same"
    ),
  }),
});

const Signup = (props) => {
  const { setSignupData } = props;
  const [formData, setFormData] = useState(initialValues);
  const { apiData, commonApi } = useApi();

  const {
    values,
    errors,
    handleChange,
    handleSubmit,
    touched,
    handleBlur,
    resetForm,
  } = useFormik({
    enableReinitialize: true,
    initialValues: formData,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      var name = values.name;
      var email = values.email;
      var password = values.password;
      if (values.password !== values.confirmPassword) {
        alert("Confirm Password First");
        return;
      }
      commonApi("user", "POST", { email, name, password });
    },
  });

  useEffect(() => {
    if (apiData !== null) {
      if (apiData?.success) {
        setFormData(initialValues);
        resetForm();
        setSignupData({
          email: values.email,
          password: values.password,
        });
      }
    }
  }, [apiData]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="title">
        <span className="text">Signup</span>
      </div>
      <div className="login--body">
        <label>
          <div className="label">Username</div>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Username"
          />
          {touched.name ? <Validation errors={errors} name="name" /> : null}
        </label>
        <label>
          <div className="label">Email address</div>
          <input
            type="text"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Email"
          />
          {touched.email ? <Validation errors={errors} name="email" /> : null}
        </label>
        <label>
          <div className="label">Password</div>
          <input
            type="text"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter Password"
          />
          {touched.password ? (
            <Validation errors={errors} name="password" />
          ) : null}
        </label>
        <label>
          <div className="label">Confirm password</div>
          <input
            type="text"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Re-Enter Password"
          />
          {touched.confirmPassword ? (
            <Validation errors={errors} name="confirmPassword" />
          ) : null}
        </label>
        <div className="sbmt">
          <button className="sbmt--btn" type="submit">
            Signup
          </button>
        </div>
      </div>
    </form>
  );
};

export default Signup;
