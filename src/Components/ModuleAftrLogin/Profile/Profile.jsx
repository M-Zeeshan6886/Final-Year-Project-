import React from 'react'
import NavbarOne from '../../../Common Components/Navbar/Navbarbefor';
// import LoginNavbar from '../../../Common Components/AftrLoginNavbar/LoginNavbar';
import Adheader from '../../Modules/All Discussion/Ad-Header/Ad-header';
import './Profile.scss';
import { Link } from 'react-router-dom'
import Profilepic from '../../assest/profileimg.png';
import proHeaderImg from '../../assest/headerimg2.JPG';
import Footer from '../../../Common Components/Footer/Footer';
const Profile = () => {
  return (
    <>
{/* <LoginNavbar />   */}
<NavbarOne/>     
    <Adheader 
    Heading="Profile"
    Para="View profile information, and see or manage your activities. " 
    Headerimg={proHeaderImg}
     />

<div className='profile-container'>
    <div className='profile-container-content'>
        <div className='profile-container-content-left'>
          <img src={Profilepic} alt="pro-photo" />
        </div>
        <div className='profile-container-content-right'>
          <h1>Xeeshuu</h1>
          <p>Community Member</p>
          <span>Member since 3 weeks ago</span>
          <Link to="/updateprofile" className="profile-container-content-right-up" >Update profile</Link>
        </div>
    </div>
</div>
<div className="profile-post-container">
      <h1>Discussions you're following</h1>
      <div className='profile-post-container-content'>
      <div className="profile-post-container-content-topic">
        <h2>Topic</h2>
        <p>1</p>
      </div>
      <div className="profile-post-container-content-topicname">
        <h1>What is stress!?</h1>
        <p>Board - <Link >Anxiety</Link></p>
        <span>Latest Post - <Link>Re: What is Stress</Link></span>
      </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Profile