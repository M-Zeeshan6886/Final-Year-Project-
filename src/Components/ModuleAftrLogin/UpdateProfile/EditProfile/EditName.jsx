import React from 'react';
import './EditName.scss';
import NavbarOne from '../../../../Common Components/Navbar/Navbarbefor';
import FormInput from '../../../FormInput/FormInput';
// import LoginNavbar from '../../../../Common Components/AftrLoginNavbar/LoginNavbar';
import Footer from '../../../../Common Components/Footer/Footer';
// For Form validation
 import { Formik, Form } from "formik";
 import * as Yup from "yup";

const EditName = () => {
  const validate = Yup.object({
    email: Yup.string().email("Email is invalid").required("Email is Required"),
    fullName: Yup.string().required("fullName is required"),
  })
  return (
    <>
    {/* <LoginNavbar /> */}
    <NavbarOne />
    <div className="SignUp-container-right-form2">
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
                        place="Enter your phone number"
                        label="Phone"
                        name="phone"
                        type="tel"
                      />
                      <FormInput
                        label="PostCode"
                        name="postcode"
                        type="number"
                        place="Enter your postcode"
                      />

                      <div className="SignUp-container-right-form-SignUp-btn">
                          <button className="create-acc2">Submit</button>
                      
                      </div>
                    </Form>
                  </div>
                )}
              </Formik>
            </div>
            <Footer />
    </>
  )
}

export default EditName;