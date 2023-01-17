import React from 'react';
import './LoginHome.scss';
// import LoginNavbar from '../../../Common Components/AftrLoginNavbar/LoginNavbar';
import Footer from '../../../Common Components/Footer/Footer';
import Mainbody from '../../MainBody/Homebodymain/mainbody';
import BodyHeader from '../../MainBody/HomeHeader/Header';
// import Login from '../../Login/Login';
import NavbarOne from '../../../Common Components/Navbar/Navbarbefor';

const LoginHome = () => {
  return (
    <>
    <div className='sticky'>
    {/* <LoginNavbar /> */}
    <NavbarOne />
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <BodyHeader />
    <Mainbody />
    <Footer />
    
    
    </>
  )
}

export default LoginHome;