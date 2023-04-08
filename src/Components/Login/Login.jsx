import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import FormInput from "../FormInput/FormInput";
import { Link } from "react-router-dom";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { userLogin, clearErrors, clearMessages } from "./../../store/actions";

const Login = () => {
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
  });
  const { errors, message, loading } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    if (message != "") {
      toast.success(message);
      dispatch(clearMessages());
      setTimeout(() => navigate("/home"), 2000);
    }
  }, [errors, message]);

  return (
    <>
      <div className="signin">
        <div className="signin-container">
          <div className="signin-container-left">
            <div className="signin-container-left-content">
              <h1 className="signin-container-left-content-heading">
                Wellcome Back!
              </h1>
              <center>
                <p className="login-txt">
                  Log-in to your account to access the Mental Health Forums.
                   <br/>
                   If you dn't h've any account then click on Create Account.
                </p>
              </center>
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
                  dispatch(userLogin(values));
                }}
              >
                {(formik) => (
                  <div>
                    <Form className="signin-container-right-form-signin">
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
                      <div className="signin-container-right-form-signin-checkbox">
                        <input type="checkbox" />
                        <p className="chckbx-text">Remember me</p>
                      </div>

                      <div className="signin-container-right-form-signin-btn">
                        <center>
                          <button type="submit" className="create-acc">
                            {loading ? "Loging..." : "Log IN"}
                          </button>
                        </center>
                        <Link to="/forgetpassword" className="frgt-pswrd">
                          Forget Your Password!?
                        </Link>
                        {/* <Link to="/signup" className="frgt-pswrd">
                          Signup?
                        </Link> */}
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
            <div className="signup-container">
              <Link to="/signup" className="signup-container-signupbtn">
                Create Account ?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
