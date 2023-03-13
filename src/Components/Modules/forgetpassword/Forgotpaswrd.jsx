import React from "react";
import "./Forgotpaswrd.scss";
import Logo from "../../../Components/assest/Logo.jpg";
import FormInput from "../../FormInput/FormInput";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Forgotpaswrd = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
  });
  return (
    <>
      <div className="forget-container">
        <div className="forget-container-content">
          <img src={Logo} alt="LogoImg" />
          <h2>Mental Health</h2>
          <h1>Reset Password</h1>
          <Formik
            initialValues={{
              email: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {(formik) => (
              <div>
                <Form className="inputfield">
                  <FormInput
                    name="email"
                    type="email"
                    place="Enter your email"
                  />
                </Form>
              </div>
            )}
          </Formik>
          <Link className="getmail">Get Email</Link>
        </div>
      </div>
    </>
  );
};

export default Forgotpaswrd;
