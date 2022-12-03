import React from 'react'
import './Bodyleftbar.scss';
import { Link } from 'react-router-dom';
import Qimg from '../../Components/assest/questionimg.png';

const Bodyleftbar = () => {
  return (
    <div className='Bodyleftbar-container'>
        <div className='Bodyleftbar-container-content'>
            <button>Start Discussion</button>
            <img src={Qimg} alt='Qphoto' />
            <h2>FAQ</h2>
            <p>Find answers to some of the more frequently asked questions on the Forums.</p>
            <Link>view the FAQ</Link>

            <h1>Jump</h1>
            <div className='Bodyleftbar-container-content-2'>
            <span>.</span>
            <button>Mental Health Conditions</button>
            </div>

            <div className='Bodyleftbar-container-content-3'>
            <span></span>
            <button>Anxiety</button>
            </div>

            <div className='Bodyleftbar-container-content-4'>
            <span></span>
            <button>Depression</button>
            </div>

            <div className='Bodyleftbar-container-content-5'>
            <span></span>
            <button>PTSD and trauma</button>
            </div>

            <div className='Bodyleftbar-container-content-6'>
            <span></span>
            <button>Suicidal thoughts and self..</button>
            </div>

        </div>
    </div>
  )
}

export default Bodyleftbar