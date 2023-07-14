import React from "react";
import "./SignUpForm.css";
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
const SignUpForm = () => {
  const initialValues = {
    name: ""
  }
  const validationSchema = Yup.object({
    name: Yup.string().required("Phone number is required. *")
  })
  const handleSubmit = (values) =>{
    console.log(values)
  }
  return (
 <>
  <Formik
     initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={handleSubmit}
  >
<Form>
<div>
      <div className="signup-form-container">
      <h1>Sign up for PayPal</h1>
      <p>First, add your mobile number</p>
      <div className="signUp-input-container">
        <Field type="number" id="name" name="name" placeholder="Mobile number"  className="signUp-input-style" />
        <ErrorMessage name="name" component="div"   className="errorMessage-style"/>
      </div>
      hdhdhdhdh
      </div>
    </div>
</Form>
  </Formik>
 </>
  );
};

export default SignUpForm;
