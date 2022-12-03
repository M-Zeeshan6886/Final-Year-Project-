import React from 'react'
import { Link } from 'react-router-dom';
import './AdComnt.scss';


const AdComnt = ( {profileImg, profileName, date, userName, diseaseName,cmntpara} ) => {
  return (
    <>
    <div className='adcmnt-container'>
        <div className='adcmnt-container-content'>
          <div className="adcmnt-container-content-one">
            <img src={profileImg} alt="pimg" />
            <h1> {profileName} </h1>
            <p>{date}</p>
          </div>
          <div className="adcmnt-container-content-two">
            <p>by :</p>
            <button> {userName} </button>
            <p>Posted in.</p>
            <button> {diseaseName} </button>
          </div>
          <hr />
          <p> {cmntpara} </p>
        </div>
    </div>
      

    </>
  )
}

export default AdComnt