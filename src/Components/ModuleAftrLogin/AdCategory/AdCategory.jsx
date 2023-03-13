import React, { useEffect, useState } from "react";
import "./AdCategory.scss";
import NavbarOne from "../../../Common Components/Navbar/Navbarbefor";
import Footer from "../../../Common Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  clearErrors,
  clearMessages,
} from "./../../../store/actions";
import { toast } from "react-toastify";

const AdCategory = () => {
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const { message, errors } = useSelector((state) => state.authReducer);
  const handleCreate = () => {
    const result = { name };
    dispatch(addCategory(result));
    setName("");
  };

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    if (message != "") {
      toast.success(message);
      dispatch(clearMessages());
    }
  }, [errors, message]);
  return (
    <>
      <NavbarOne />

      <div className="adcategory-container">
        <div className="adcategory-container-content">
          <input
            type="text"
            placeholder=" Add Category"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={() => handleCreate()}>Create</button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdCategory;
