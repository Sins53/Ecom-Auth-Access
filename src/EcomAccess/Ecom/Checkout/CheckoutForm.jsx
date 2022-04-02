import React, { useRef } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Validation from "../../../Components/Error";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
};
const validationSchema = Yup.object({
  name: Yup.string().required("Please Enter Name"),
  email: Yup.string()
    .email("Must be a valid email")
    .required("Please enter Email"),
  phone: Yup.string()
    .min(10, "Min value 10.")
    .max(10, "Must be below 10")
    .required(),
  address: Yup.string().required("Please Enter Address"),
});

const CheckoutForm = (props) => {
  const { setFormSubmit } = props;

  const fname = useRef(null);
  const fphone = useRef(null);
  const femail = useRef(null);
  const faddress = useRef(null);

  const { values, errors, handleChange, handleSubmit, touched, handleBlur } =
    useFormik({
      enableReinitialize: true,
      initialValues,
      validationSchema,
      onSubmit: () => {
        setFormSubmit(false);
      },
    });

  const resetFormData = () => {
    fname.current.value = "";
    fphone.current.value = "";
    femail.current.value = "";
    faddress.current.value = "";
  };

  return (
    <>
      <form className="Checkout-form mt-5" onSubmit={handleSubmit}>
        <div className="Checkout-form-contact">
          <div>
            <h2>Contact Details</h2>
            <label className="mt-5"> Enter Name</label>
            <input
              ref={fname}
              type="text"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter First Name"
            />
            {touched.name ? <Validation errors={errors} name="name" /> : null}
          </div>
          <div>
            <label> Phone</label>
            <input
              ref={fphone}
              type="number"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Phone"
            />
            {touched.phone ? <Validation errors={errors} name="phone" /> : null}
          </div>
          <div>
            <label> Email</label>
            <input
              ref={femail}
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Email"
            />
            {touched.email ? <Validation errors={errors} name="email" /> : null}
          </div>
        </div>
        <div className="Checkout-form-address mt-5">
          <div>
            <h2>Shipping informations</h2>
          </div>
          <div className="mt-3">
            <label> Address </label>
            <input
              ref={faddress}
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Address"
            />
            {touched.address ? (
              <Validation errors={errors} name="address" />
            ) : null}
          </div>
        </div>
        <div className="text-end mt-4">
          <button
            className="btn btn-danger mr-4"
            type="button"
            onClick={resetFormData}
          >
            Reset
          </button>
          <button className="btn btn-primary" type="submit">
            Confirm
          </button>
        </div>
      </form>
    </>
  );
};

export default CheckoutForm;
