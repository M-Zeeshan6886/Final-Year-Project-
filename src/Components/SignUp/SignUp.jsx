import React from "react";
import "./SignUp.scss";
import FormInput from "../FormInput/FormInput";
import { Link } from "react-router-dom";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    confirmPassword: Yup.string().when("password", (password, field) =>
      password ? field.required().oneOf([Yup.ref("password")]) : field
    ),
    fullName: Yup.string().required("fullName is required"),
  });

  return (
    <>
      <div className="SignUp">
        <div className="SignUp-container">
          <div className="SignUp-container-left">
            <div className="SignUp-container-left-content">
              <h1 className="SignUp-container-left-content-heading">
                Wellcome Back!
              </h1>
              <center>
                <p className="login-txt">
                  Log-in to your account to access the Mental Health Forums.
                </p>
              </center>
            </div>
          </div>
          <div className="SignUp-container-right">
            {/* <div className="SignUp-container-right-navbar">
                  <Navbar sign="In" />
                </div> */}
            <div className="SignUp-container-right-form">
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(formik) => (
                  <div>
                    <center>
                      <Link to="/login" className="login-btn">
                        Login
                      </Link>
                    </center>
                    <Form className="SignUp-container-right-form-SignUp">
                      <FormInput
                        label="Full Name"
                        name="fullName"
                        type="text"
                        place="Enter your Full Name"
                      />
                      <FormInput
                        label="Email"
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
                      <FormInput
                        label="Confirm Password"
                        name="confirmPassword"
                        type="password"
                        place="Enter your confirm password"
                      />

                      <div className="SignUp-container-right-form-SignUp-btn">
                      <center style={{marginTop:"2rem"}}>
                          <Link className="create-acc"  >Create account</Link>
                          </center>
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
  );
};

export default SignUp;
