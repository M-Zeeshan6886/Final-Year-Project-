import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import {FiSearch} from 'react-icons/fi';
import headerimg from '../../assest/headerimg2.JPG';

const Search='';
const BodyHeader = () => {
  return (
    <>
    <div className="bodyheader-container">
<div className="bodyheader-container-left">
    <h1>Hey there. it's nice to see you.</h1>
    <h3>Read, share and learn from people who understand what you're going through.</h3>
    <br></br>
    <Link to="/addpost" className="bodyheader-container-left-btn">
      Start discussion
      {/* <HiOutlineArrowSmRight  className='arrow-icon' /> */}
      </Link>
    <div className='bodyheader-container-left-inputfield'>
      <input type={Search} placeholder=' Search' />
     <button>
     <FiSearch />
     
     </button>
    </div>
</div>
<div className="bodyheader-container-right">
  <img src={headerimg} alt='headerimg' />
</div>
    </div>
    
    <div className='commontopic-container'>
    <div className='commontopic-container-content'>
     <h1>Common Topics :</h1>
     <div className='commontopic-container-content-disease'>
     <p>Anxiety</p>
     <span>||</span>
     <p>Depression</p>
     <span className="commontopic-orperator">||</span>
     </div>
     <div className='commontopic-container-content-disease2'>
     <p>Suicidal thoughts & self harm</p>
     <span>||</span>
     <p>Relationship & family issues</p>
     </div>
     
    </div>
    </div>
    </>
  )
}

export default BodyHeader