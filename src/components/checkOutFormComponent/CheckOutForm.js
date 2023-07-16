import React, { useEffect, useState } from "react";
import "./CheckOutForm.css";
import CheckoutSpinner from "../checkoutSpinner/CheckoutSpinner";
import MyPaypal from '../../images/myPaypal-removebg-preview.png'
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import CheckOutFooter from "../checkOutFooterComponent/CheckOutFooter";
const CheckOutForm = () => {
  // Initialize Email
  const initialValues = {
    email: ""
  }
  // Validate Schema
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Your Email is Require *")
  })
  const handleSubmit = (values) =>{
    console.log(values)
  }
    // Loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set Loading Time
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    // Clean up functions
    return () => clearTimeout(timeOut);
  }, []);
  return (
   <Formik
      initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={handleSubmit}
   >
     <div>
      {isLoading ? (
        <CheckoutSpinner />
      ) : (
     <div>
     <Form>
     <div className="checkout-bg">
       <div className="checkout-form">
        <Link to="/"><img src={MyPaypal} alt="MyPaypal-Logo" className="MyPaypal-style"/></Link>
        <h2 className="checkout-signUp-text">Sign up for a Business <br />account</h2>
        <p className="checkout-text-style">Enter the email address you’ll use to sign up<br /> or log in</p>
        <Field type="email" id="email" name="email"
                  placeholder="Email Adress"
                  className="Checkout-signUp-input-style"
                />
                <ErrorMessage name="email" component="div"  className="email-errorMessage-style"/>
                <button className="continue-btn-style"  onSubmit={handleSubmit}>Continue</button>
       </div>
        </div>
     </Form>
     <CheckOutFooter />
     </div>
      )}
    </div>
   </Formik>
  );
};

export default CheckOutForm;
