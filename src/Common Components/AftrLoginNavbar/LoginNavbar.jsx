import React, { useState, useEffect, useRef } from "react";
import "./LoginNavbar.scss";
import { Link } from "react-router-dom";
import { BsPersonPlus } from "react-icons/bs";
import { CiBellOn } from "react-icons/ci";
// import { IoIosNotificationsOutline } from "react-icons/io";
import logoimg from "../../Components/assest/Logo.jpg";
import Profileimg from '../../Components/assest/profileimg.png'
import { IoIosMenu, IoMdClose } from "react-icons/io";
import logo from "../../Components/assest/Logo.jpg";
// import { Link } from "react-router-dom";

const LoginNavbar = () => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef();
  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="LNavbar-container">
        <div className="LNavbar-container-content">
          <div className="LNavbar-container-content-left">
            <img src={logoimg} alt="logo-img" />
            <h1>Mental Health</h1>
          </div>
          <div className="LNavbar-container-content-middle">
            <Link
              to="/home"
              className="LNavbar-container-content-middle-button"
            >
              Forum
            </Link>
            <Link
              to="/alldiscussion"
              className="LNavbar-container-content-middle-button"
            >
              All Discussion
            </Link>
            <Link
              to="/help"
              className="LNavbar-container-content-middle-button"
            >
              Forum Guidelines
            </Link>
          </div>
          <div className="LNavbar-container-content-right" ref={menuRef}>
            <Link
              to="/profile"
              className="LNavbar-container-content-right-icons"
            >
              <BsPersonPlus
               />
            </Link>
          
              <CiBellOn  className="LNavbar-container-content-right-icons2"
              onClick={() => {
                  setOpen(!open);
                }}
               />

{/*  Start*/}
<div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
               
               <ul>
                 <li className="dropdownItem">
                   <img src={Profileimg} alt="p-img" />
                   <div className="noti-items">
                    <h3>User Name</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
                   </div>
                 </li>
               </ul>
             </div>
             {/* End  */}

            
            <button>Sign out</button>
          </div>
        </div>
      </div>

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
                  <IoMdClose onClick={showSidebar} style={{ color: "white" }} />
                ) : (
                  <IoIosMenu
                    className="cross-icons"
                    onClick={showSidebar}
                    style={{ color: "white" }}
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
                  <Link to="/home">Forum</Link>
                  <Link to="/alldiscussion">All Discussion</Link>
                  <Link to="/help">Form Guidline</Link>
                </div>
                <div>
                  <Link
                    to="/profile"
                    className="LNavbar-container-content-right-icons"
                  >
                    <BsPersonPlus />
                  </Link>
                  <Link to="" className="LNavbar-container-content-right-icons">
                    <CiBellOn />
                  </Link>
                </div>
                <br></br>
                <div className="topbar-container-btn">
                  {/* <button className="topbar-container-btn-first">Log In</button> */}

                  <button className="topbar-container-btn-second">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginNavbar;
