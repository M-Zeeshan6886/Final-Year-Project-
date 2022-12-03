import React from 'react';
import './Homebefor.scss';
import Footer from '../../../Common Components/Footer/Footer';
import NavbarOne from '../../../Common Components/Navbar/Navbarbefor';
import Homemainbody from '../../MainBody/HomeHeader/Homemainbody';

const Homebefor = () => {
  return (
    <>
    <div className='sticky'>
    <NavbarOne />
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Homemainbody />
    <Footer />
    </>
  )
}

export default Homebefor;