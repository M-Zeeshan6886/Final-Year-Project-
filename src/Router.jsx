import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import AllDiscussion from "./Components/Modules/All Discussion/AllDiscussion";
import Homebefor from "./Components/Modules/Home/Homebefor";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import FGuideline from "./Components/Modules/ForumGuideline/FGuideline";
import DiseaseModule from "./Common Components/DiseaseModule/Disease";
import LoginHome from "./Components/ModuleAftrLogin/HomeAftrLogin/LoginHome";
import AddPost from "./Components/ModuleAftrLogin/AddPost/AddPost";
import AdCategory from "./Components/ModuleAftrLogin/AdCategory/AdCategory";
import Profile from "./Components/ModuleAftrLogin/Profile/Profile";
import UpdateProfile from "./Components/ModuleAftrLogin/UpdateProfile/UpdateProfile";
import EditName from "./Components/ModuleAftrLogin/UpdateProfile/EditProfile/EditName";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Forgotpaswrd from "./Components/Modules/forgetpassword/Forgotpaswrd";
import Resetpaswrd from "./Components/Modules/restpassword/Forgotpaswrd";
import ProtectLoginRoute from "./Components/ProtectLoginRoute/ProtectLoginRoute";
import ProtectedRoute from "./Components/ProTectedRoute/ProTectedRoute";
import AccessDenied from "./Components/AccessDenied/AccessDenied";

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
          <Route path="/forgetpassword" element={<Forgotpaswrd />} />
          <Route path="/resetPassword/:id" element={<Resetpaswrd />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<ProtectLoginRoute />}>
            <Route path="/" element={<Login />} />
          </Route>

          {/* //After Login pages */}
          <Route element={<ProtectedRoute />}>
            <Route path="/dashboard" element={<Homebefor />} />
            <Route path="/help" element={<FGuideline />} />
            <Route path="/alldiscussion" element={<AllDiscussion />} />
            <Route path="/disease" element={<DiseaseModule />} />
            <Route path="/home" element={<LoginHome />} />
            <Route path="/addpost" element={<AddPost />} />
            <Route path="/adcategory" element={<AdCategory />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/updateprofile" element={<UpdateProfile />} />
            <Route path="/editname" element={<EditName />} />
            <Route
              path="/not-found"
              element={<h1 className="text-white">Not found</h1>}
            />
            <Route
              path="/access-denied"
              element={<h1 className="text-white">Not found</h1>}
            />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
