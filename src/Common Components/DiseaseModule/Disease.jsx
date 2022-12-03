import React from 'react'
import Adheader from '../../Components/Modules/All Discussion/Ad-Header/Ad-header';
import NavbarOne from '../Navbar/Navbarbefor';
import Headerimg3 from '../../Components/assest/psyco2.png'
import DMainbody from './DMainbody';
import Footer from '../Footer/Footer';

const DiseaseModule = () => {
  return (
    <>
    <NavbarOne />
    <Adheader  Headerimg={Headerimg3} Heading="Disease Name" 
    Para="Discription about the disease"/>

    <DMainbody />

    <Footer/>
    
    </>
  )
}

export default DiseaseModule;