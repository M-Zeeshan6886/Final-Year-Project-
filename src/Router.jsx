import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllDiscussion from "./Components/Modules/All Discussion/AllDiscussion";
import Homebefor from "./Components/Modules/Home/Homebefor";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import FGuideline from "./Components/Modules/ForumGuideline/FGuideline";
import DiseaseModule from "./Common Components/DiseaseModule/Disease";
import LoginHome from "./Components/ModuleAftrLogin/HomeAftrLogin/LoginHome";
import AddPost from "./Components/ModuleAftrLogin/AddPost/AddPost";
import Profile from "./Components/ModuleAftrLogin/Profile/Profile";
import UpdateProfile from "./Components/ModuleAftrLogin/UpdateProfile/UpdateProfile";
import EditName from "./Components/ModuleAftrLogin/UpdateProfile/EditProfile/EditName";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <Routes>
          {/* Before Login pages  */}
          <Route path="/" element={<Homebefor />} />
          <Route path="/help" element={<FGuideline />} />
          <Route path="/alldiscussion" element={<AllDiscussion />} />
          <Route path="/disease" element={<DiseaseModule />} />

          {/* //Signup pages */}
          <Route path="/signin" element={<SignUp />} />
          <Route path="/login" element={<Login />} />

          {/* //After Login pages */}
          <Route path="/home" element={<LoginHome />} />
          <Route path="/addpost" element={<AddPost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/updateprofile" element={<UpdateProfile />} />
          <Route path="/editname" element={<EditName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
