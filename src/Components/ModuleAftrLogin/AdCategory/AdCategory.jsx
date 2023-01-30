import React from 'react';
import './AdCategory.scss';
import NavbarOne from "../../../Common Components/Navbar/Navbarbefor";
import Footer from "../../../Common Components/Footer/Footer";
const AdCategory = () => {
  return (
    <>
    <NavbarOne />

   <div className="adcategory-container">
    <div className="adcategory-container-content">
    <input
                type="text"
                placeholder=" Add Category"
                // value={title}
                // onChange={(e) => setTitle(e.target.value)}
              />

    </div>
     </div>
    <Footer />
    
    </>
  )
};

export default AdCategory;