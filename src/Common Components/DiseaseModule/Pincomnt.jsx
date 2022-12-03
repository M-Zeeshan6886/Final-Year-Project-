import React from 'react'
import './Pincomnt.scss';
// import profileimg from '../../Components/assest/profileimg.png'
const Pincomnt = ( {profileimg,profileName, replyes,Para,DiseaseName,UserName,date} ) => {
  return (
    <>
    <div className="pincomnt-container">
        <div className='pincomnt-container-content'>
            <div className='pincomnt-container-content-one'>
                <img src={profileimg} alt="profile-photo" />
                <h1> {profileName} </h1>
                <p> {replyes} </p>
            </div>
            <div className="pincomnt-container-content-two">
                <p> {Para} </p>
            </div>
            <hr/>
            <div className="pincomnt-container-content-three">
                <p>by</p>
                <span>.{UserName}</span>
                <p>.Community Member</p>
                <p>Posted in</p>
                <span>{DiseaseName}</span>
                <p> {date}</p>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Pincomnt