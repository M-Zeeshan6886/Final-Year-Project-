import React from 'react';
import './StartDiscussion.scss';
import { Link } from 'react-router-dom';



const StartDiscussion = () => {
  return (
    <>
    <div className='StartDiscussion-container'>
        <div className='StartDiscussion-container-content'>
            <p>Sorted by :</p>
            <select className="selction">
    <option value={1}>Most recent</option>
    <option value={2}>Most commented</option>
    <option value={3}>Most supported</option>
  </select>
  <Link to="/addpost" className="btn-discussion">Start Discussion</Link>
        </div>
    </div>
    
    </>
  )
}

export default StartDiscussion;