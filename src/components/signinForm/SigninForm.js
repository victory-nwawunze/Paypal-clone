import React from "react";
import "./SigninForm.css";
import PaypalLogo from "../../images/paypal-logo-removebg-preview.png";
import FlagLogo from '../../images/Nigeria-Flag-icon-removebg-preview.png'
import { AiOutlineArrowDown } from "react-icons/ai";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
const SigninForm = () => {
  // Initialize Email
  const initialValues = {
    email: ""
  }
  // Validate Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Your Email is Require")
  })
  const handleSubmit = (values) =>{
    console.log(values)
  }
  return (
   <Formik
   initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={handleSubmit}
   >
    <Form>
    <div className="signInForm-container-style">
      <div className="signInForm-style">
        <img src={PaypalLogo} alt="Paypal-Logo" className="Logo-style" />
        <div className="form-input-container">
          <Field type="email" id="email" name="email" placeholder="Email or mobile number" className="input-style" />
          <ErrorMessage name="email" component="div"  className="errorMessage-style"/>
        </div>
        <div className="form-input-container">
          <button className="forget-email-btn-style">Forget email ?</button>
        </div>
        <div className="form-input-container">
          <button className="next-btn-style">Next</button>
        </div>
        <div className="form-input-container">
        <button className="sign-up-btn-style">Sign Up</button>
          </div>
        <div className="form-input-container">
        <div className="form-flag-container-style">
          <div className="form-flag-flex-style">
            <div><img src={FlagLogo} className="icon-Style" /></div>
            <div><AiOutlineArrowDown /></div>
          </div>
        </div>
          </div>
        </div>
      </div>
    </Form>
   </Formik>
  );
};

export default SigninForm;
