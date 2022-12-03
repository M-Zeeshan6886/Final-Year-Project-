import React from 'react';
import './Login.scss';
import FormInput from '../FormInput/FormInput';
import { Link } from 'react-router-dom';
   // For Form validation
   import { Formik, Form } from "formik";
   import * as Yup from "yup";

const Login = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });

  return (
    <>
    <div className="signin">
        <div className="signin-container">
          <div className="signin-container-left">
            <div className="signin-container-left-content">
              <h1 className="signin-container-left-content-heading">
                Wellcome Back!
              </h1>
              <center><p className='login-txt'>
              Log-in to your account to access the Mental Health Forums.
              </p></center>
            </div>
          </div>
          <div className="signin-container-right">
            <div className="signin-container-right-form">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div>
                    <Form className="signin-container-right-form-signin">
                      <FormInput
                        label="Enter your username"
                        name="email"
                        type="email"
                        place="Enter your email"
                      />
                      <FormInput
                        place="Enter your password"
                        label="Password"
                        name="password"
                        type="password"
                      />
                      <div className="signin-container-right-form-signin-checkbox">
                        <input type="checkbox" />
                        <p className='chckbx-text'>Remember me</p>
                      </div>
                      
                      <div className="signin-container-right-form-signin-btn">
                        <center>
                        
      <Link to="/home" className="login-btn2">Loged in</Link>
     
                        </center>
                        <a href="#" className='frgt-pswrd'>Forget Your Password!?</a>
                      </div>
                      
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    
    
    
    </>
  )
}

export default Login;