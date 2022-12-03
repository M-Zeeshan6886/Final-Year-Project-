import React from 'react';
import './LoginHome.scss';
import LoginNavbar from '../../../Common Components/AftrLoginNavbar/LoginNavbar';
import Footer from '../../../Common Components/Footer/Footer';
import Mainbody from '../../MainBody/Homebodymain/mainbody';
import BodyHeader from '../../MainBody/HomeHeader/Header';

const LoginHome = () => {
  return (
    <>
    <div className='sticky'>
    <LoginNavbar />
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