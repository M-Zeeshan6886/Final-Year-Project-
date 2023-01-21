import React, { useEffect } from "react";
import "./Header.scss";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import headerimg from "../../assest/headerimg2.JPG";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  getAllCategory,
  clearErrors,
  clearMessages,
} from "./../../../store/actions";

const Search = "";
const BodyHeader = () => {
  const dispatch = useDispatch();
  const { categories, message, loading } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);
  return (
    <>
      <div className="bodyheader-container">
        <div className="bodyheader-container-left">
          <h1>Hey there. it's nice to see you.</h1>
          <h3>
            Read, share and learn from people who understand what you're going
            through.
          </h3>
          <br></br>
          <div classNAme="bh-btns">
          <Link to="/addpost" className="bodyheader-container-left-btn">
            Start discussion
            {/* <HiOutlineArrowSmRight  className='arrow-icon' /> */}
          </Link>
          <button className="ad-category">Add Category</button>
          </div>
          <div className="bodyheader-container-left-inputfield">
            <input type={Search} placeholder=" Search" />
            <button>
              <FiSearch />
            </button>
          </div>
        </div>
        <div className="bodyheader-container-right">
          <img src={headerimg} alt="headerimg" />
        </div>
      </div>

      <div className="commontopic-container">
        <div className="commontopic-container-content">
          <h1>Common Topics :</h1>
          {categories.length > 0
            ? categories.map((item, ind) => {
                return (
                  <div
                    className="commontopic-container-content-disease"
                    key={ind}
                  >
                    <p>{item.name}</p>
                    <span>||</span>
                  </div>
                );
              })
            : "No Catgeory Found"}
        </div>
      </div>
    </>
  );
};

export default BodyHeader;
