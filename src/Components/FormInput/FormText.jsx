import React from "react";
import "./FormInput.scss";
import { ErrorMessage, useField } from "formik";
const FormText = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={field.name} className="form-label">
        {label}
      </label>
      <textarea
        name="message"
        id="message"
        cols="30"
        rows="6"
        className={`form-input ${meta.touched && meta.error && "is-invalid"}`}
        {...field}
        {...props}
        autoComplete="off"
      />
      <ErrorMessage component="div" name={field.name} className="form-error" />
    </>
  );
};

export default FormText;
