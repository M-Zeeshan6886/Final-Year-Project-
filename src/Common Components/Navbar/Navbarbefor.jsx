import React, { useState, useEffect } from "react";
import "./Navbarbefor.scss";
import logo from "../../Components/assest/Logo.jpg";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout, clearErrors, clearMessages } from "./../../store/actions";
import { toast } from "react-toastify";

const NavbarOne = () => {
  const navigate = useNavigate("");
  const [sidebar, setSidebar] = useState(false);
  const dispatch = useDispatch();
  const { errors, message, loading } = useSelector(
    (state) => state.authReducer
  );
  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    if (message != "") {
      toast.success(message);
      dispatch(clearMessages());
      setTimeout(() => navigate("/"), 3000);
    }
  }, [errors, message]);
  return (
    <>
      <nav className="topbar">
        <div className="topbar-container">
          <div className="topbar-container-logo">
            <img src={logo} alt="logo" />
            <h1 className="logo-text">Mental Health</h1>
          </div>
          <div className="topbar-container-menu">
            <Link to="/" className="link-items">
              Forum
            </Link>
            <Link to="/alldiscussion" className="link-items">
              All Discussation
            </Link>
            <Link to="/help" className="link-items">
              Form Guidline
            </Link>
          </div>
          {/* <div className="topbar-container-btn">
            <Link to="/login" className="topbar-container-btn-first">
              Log In
            </Link>
            <Link to="/signin" className="topbar-container-btn-second">
              Sign Up
            </Link>
          </div> */}
          {localStorage.getItem("userToken") ? (
            <div className="topbar-container-btn">
              <button
                className="topbar-container-btn-second"
                onClick={() => dispatch(Logout())}
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="topbar-container-btn">
              <Link to="/login" className="topbar-container-btn-first">
                Log In
              </Link>
              <Link to="/signin" className="topbar-container-btn-second">
                Sign In
              </Link>
            </div>
          )}
        </div>
      </nav>

      <div className="responsive-topbar">
        <div
          className={`${
            sidebar ? "side_menu-active" : "responsive-topbar-top "
          }`}
        >
          {/* Responsive Bar  */}
          <div className="responsive-topbar-container">
            <div className="responsive-topbar-top-logo">
              <img src={logo} alt="logo" />
              <h1>Mental Health</h1>
            </div>

            <div className="responsive-topbar-top-hamburger">
              <Link>
                {sidebar ? (
                  <IoMdClose
                    className="cross-icons"
                    onClick={showSidebar}
                    style={{ color: "" }}
                  />
                ) : (
                  <IoIosMenu
                    className="cross-icons"
                    onClick={showSidebar}
                    // style={{ color: "$skybl" }}
                  />
                )}
              </Link>
            </div>
          </div>

          {/* Responsive Container */}

          <div
            className={`${sidebar ? "contact-active" : "contact-active-none"}`}
          >
            <div className="responsive-menu-link">
              <div className="responsive-menu-link-container">
                <div className="responsive-menu-link-container-btn">
                  <Link to="/">Forum</Link>
                  <Link to="/alldiscussion">All Discussation</Link>
                  <Link to="/help">Form Guidline</Link>
                </div>
                {localStorage.getItem("userToken") ? (
                  <div className="topbar-container-btn">
                    <button className="topbar-container-btn-second">
                      {loading ? "Signouting..." : "Sign Out"}
                    </button>
                  </div>
                ) : (
                  <div className="topbar-container-btn">
                    <Link to="/login" className="topbar-container-btn-first">
                      Log Insssssss
                    </Link>
                    <Link to="/signin" className="topbar-container-btn-second">
                      Sign In
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavbarOne;
