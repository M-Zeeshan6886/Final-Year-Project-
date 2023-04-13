import React, { useEffect } from "react";
import NavbarOne from "../../../Common Components/Navbar/Navbarbefor";
import Adheader from "./Ad-Header/Ad-header";
import Hphoto from "../../../Components/assest/headerimg3.JPG";
import "./AllDiscussion.scss";
import StartDiscussion from "../../Start-discussion/StartDiscussion";
import AdComnt from "./Adcomntbox/AdComnt";
import profileimg from "../../assest/profileimg.png";
import Footer from "../../../Common Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {
  getAllProduct,
  getDisccsuion,
  clearErrors,
  clearMessages,
} from "./../../../store/actions";

const AllDiscussion = () => {
  const dispatch = useDispatch();
  const { category } = useParams();
  const { errors, message, discData, loading } = useSelector(
    (state) => state.authReducer
  );

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    dispatch(getDisccsuion(category));
  }, []);
  return (
    <>
      <NavbarOne />
      <Adheader
        Heading="All Discussion"
        Para="Any recent posts in the Forums. This includes all discussions, not just the ones you've engaged with."
        Headerimg={Hphoto}
      />
      <StartDiscussion />
      {discData.length > 0
        ? discData.map((data, ind) => {
            return (
              <AdComnt
                profileImg={profileimg}
                profileName={data.title}
                date={data.createdAt}
                userName={data.createdBy.fullName}
                diseaseName={data.category}
                cmntpara={data.body}
              />
            );
          })
        : "No Related Data Found..."}

      <Footer />
    </>
  );
};

export default AllDiscussion;
