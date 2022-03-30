import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import useGetToken from "../../CustomHooks/useGetToken";
import Validation from "../Error";

const initialValues = {
  email: "",
  password: "",
};
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Must be a valid email")
    .required("Please enter Email"),
  password: Yup.string().required("Please Enter Password"),
});

const Login = (props) => {
  const { signupData } = props;
  const [formData, setFormData] = useState(initialValues);
  const { getToken, token } = useGetToken();
  const navigate = useNavigate();

  const { values, errors, handleChange, handleSubmit, touched, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues: formData,
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        resetForm();
        handleData(values);
        setFormData(initialValues);
      },
    });

  useEffect(() => {
    setFormData(signupData);
  }, [signupData]);

  const handleData = (data) => {
    getToken(data);
  };

  useEffect(() => {
    console.log(token);
    if (token !== null) {
      if (token?.success && token.data?.token) {
        localStorage.setItem("token", token.data.token);
        navigate("/");
      } else {
        alert(token.message);
      }
    }
    // if (isToken !== null) {
    //   navigate("/");
    // }
  }, [token]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="title text-primary">
        <span className="text">Login</span>
      </div>
      <div className="login--body">
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
        <div className="sbmt">
          <button className="sbmt--btn" type="submit">
            Login
          </button>
        </div>
      </div>
      <button className="or">OR</button>
    </form>
  );
};

export default Login;
