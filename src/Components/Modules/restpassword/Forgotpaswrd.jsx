import React, { useState, useEffect } from "react";
import "./Forgotpaswrd.scss";
import Logo from "../../../Components/assest/Logo.jpg";
import FormInput from "../../FormInput/FormInput";
// For Form validation
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  UpdatePassword,
  clearErrors,
  clearMessages,
} from "./../../../store/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Forgotpaswrd = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
  });
  const { id } = useParams();
  const navigate = useNavigate("");
  const dispatch = useDispatch();
  const [newPassword, setNewPassword] = useState("");
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
    const result = { id, password: newPassword };
    dispatch(UpdatePassword(result));
  };
  return (
    <>
      <div className="forget-container">
        <div className="forget-container-content">
          <img src={Logo} alt="LogoImg" />
          <h2>Mental Health</h2>
          <h1>Change Password</h1>
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
                    name="newPassword"
                    type="password"
                    place="Enter your newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />
                </Form>
              </div>
            )}
          </Formik>
          <button onClick={() => handleReset()}>
            {loading ? "Updating..." : "Update"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Forgotpaswrd;
