import React, { useState, useEffect } from "react";
import "./Forgotpaswrd.scss";
import Logo from "../../../Components/assest/Logo.jpg";
import FormInput from "../../FormInput/FormInput";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ResetPassword,
  clearErrors,
  clearMessages,
} from "./../../../store/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Forgotpaswrd = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
  });
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const [userMail, setUserMail] = useState("");
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
      setTimeout(() => navigate("/"), 2000);
    }
  }, [errors, message]);

  const handleReset = () => {
    const result = { email: userMail };
    dispatch(ResetPassword(result));
  };
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
            // validationSchema={validate}
            onSubmit={(values) => {
              console.log("email is", values);
            }}
          >
            {(formik) => (
              <div>
                <Form className="inputfield">
                  <FormInput
                    name="email"
                    type="email"
                    place="Enter your email"
                    value={userMail}
                    onChange={(e) => setUserMail(e.target.value)}
                  />
                </Form>
              </div>
            )}
          </Formik>
          <button onClick={() => handleReset()} className="getmail">
            {loading ? "Getting Email..." : "Get Email"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Forgotpaswrd;
