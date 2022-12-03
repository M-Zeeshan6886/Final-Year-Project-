import React from 'react';
import LoginNavbar from '../../../Common Components/AftrLoginNavbar/LoginNavbar';
import './UpdateProfile.scss';
import EditProfile from '../../assest/profileimg.png';
import {Link} from 'react-router-dom';
import Footer from '../../../Common Components/Footer/Footer';

const UpdateProfile = () => {
  return (
    <>
<LoginNavbar />
<div className='updateprofile-container'>
    <div className='updateprofile-container-content'>
    <h1>Member Profile</h1>
    <h3>Your Details</h3>

<div className='updateprofile-container-content-details'>
    
    <div className='updateprofile-container-content-details-data'>
        <p> <b>Name:</b> Muhammad Zeeshan Zafar </p>
        <p> <b>Display Name:</b> xeeshuu </p>
        <p> <b>Phone:</b> +92308***524 </p>
        <p> <b>Postcode:</b> 2000 </p>
        <p> <b>Email:</b> mzxeeshuu@gmail.com </p>
        <p> <b>Member Since:</b> 31 October, 2022 </p>

        <br></br>
        <br></br>
        <Link to="/editname" className='updateprofile-container-content-details-data-name'>Edit Name</Link>
        <br></br>
</div>
<div className='updateprofile-container-content-details-editpic'>
   <img src={EditProfile} alt="updatepicture" />
   <input type="file" />
    </div>

    </div>
    
    </div>
    </div>
    <Footer />
    </>
  )
}

export default UpdateProfile;