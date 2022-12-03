import React from 'react';
import './Ad-header.scss';

const Adheader = ( {Heading,Para,Headerimg} ) => {
  return (
    <>
    <div className='adheader-container'>
        <div className='adheader-container-content'>
            <div className='adheader-container-content-left'>
                <h1>{Heading}</h1>
                <p> {Para} </p>
            </div>
            <div className='adheader-container-content-right'>
                <img src={Headerimg} alt="header-img" />
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Adheader;