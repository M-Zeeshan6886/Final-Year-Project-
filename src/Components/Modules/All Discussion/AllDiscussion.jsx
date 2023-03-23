import React from "react";
import NavbarOne from "../../../Common Components/Navbar/Navbarbefor";
import Adheader from "./Ad-Header/Ad-header";
import Hphoto from "../../../Components/assest/headerimg3.JPG";
import "./AllDiscussion.scss";
import StartDiscussion from "../../Start-discussion/StartDiscussion";
import AdComnt from "./Adcomntbox/AdComnt";
import profileimg from "../../assest/profileimg.png";
import Footer from "../../../Common Components/Footer/Footer";
import { useSelector } from "react-redux";

const AllDiscussion = () => {
  const { errors, message, discData, loading } = useSelector(
    (state) => state.authReducer
  );

  console.log("disData is", discData);
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
