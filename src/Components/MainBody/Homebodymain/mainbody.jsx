import React from 'react'
import { Link } from 'react-router-dom';
import './mainbody.scss';
const Mainbody = () => {
  return (
    <>
    <div className='mainbody-container'>
        <div className='mainbody-container-one'>
            <div className='mainbody-container-one-dcard1'>
                <div className='mainbody-container-one-dcard1-content'>
                    <span>Forum</span>
                    <hr />
                    <h1>Anxiety</h1>
                    <p>Anxiety is the most common mental health condition in the World. Share your own story and learn about other member’s experiences with anxiety.</p>
                    <div className="mainbody-container-one-dcard1-content-lower1">
                        <span>Discussions</span>
                        <p>3456</p>
                    </div>
                    <div className="mainbody-container-one-dcard1-content-lower2">
                    <span>Posts</span>
                        <p>6543</p>
                    </div>
                    <div className="mainbody-container-one-dcard1-content-viewmore">
                    <Link to="/disease" className="btn">View more..</Link>
                    </div>

                </div>
            </div>
            <div className='mainbody-container-one-dcard2'>

            <div className='mainbody-container-one-dcard2-content'>
                    <span>Forum</span>
                    <hr />
                    <h1>Depression</h1>
                    <p>Depression affects people in all over the world every day. Share your own story and learn about other member’s experiences with depression.         

                    </p>
                    <div className="mainbody-container-one-dcard2-content-lower1">
                        <span>Discussions</span>
                        <p>3456</p>
                    </div>
                    <div className="mainbody-container-one-dcard2-content-lower2">
                    <span>Posts</span>
                        <p>6543</p>
                    </div>
                    <div className="mainbody-container-one-dcard2-content-viewmore">
                    <Link to="/disease" className="btn">View more..</Link>
                    </div>
                </div>
                
            </div>
        </div>
        <div className='mainbody-container-two'>
            <div className='mainbody-container-two-dcard3'>

            <div className='mainbody-container-one-dcard2-content'>
                    <span>Forum</span>
                    <hr />
                    <h1>PTSD and trauma</h1>
                    <p>A space for discussing post-traumatic stress disorder (PTSD), domestic abuse, sexual abuse and other trauma. Please note some content may be distressing.         
                        
                    </p>
                    <div className="mainbody-container-one-dcard2-content-lower1">
                        <span>Discussions</span>
                        <p>3456</p>
                    </div>
                    <div className="mainbody-container-one-dcard2-content-lower2">
                    <span>Posts</span>
                        <p>6543</p>
                    </div>
                    <div className="mainbody-container-one-dcard2-content-viewmore">
                    <Link to="/disease" className="btn">View more..</Link>
                    </div>
                </div>

            </div>

            <div className='mainbody-container-two-dcard4'>

 <div className='mainbody-container-two-dcard4-content'>
                    <span>Forum</span>
                    <hr />
                    <h1>Suicidal thoughts and self-harm</h1>
                    <p>This space discusses suicide and self-harm (SASH). Consider limiting the time you spend here. To use the section safely, read the discussion.         
                    </p>
                    <div className="mainbody-container-two-dcard4-content-lower1">
                        <span>Discussions</span>
                        <p>3456</p>
                    </div>
                    <div className="mainbody-container-two-dcard4-content-lower2">
                    <span>Posts</span>
                        <p>6543</p>
                    </div>
                    <div className="mainbody-container-two-dcard4-content-viewmore">
                    <Link to="/disease" className="btn">View more..</Link>
                    </div>
                </div>

            </div>
        </div>
    </div>
    
    </>
  )
};

export default Mainbody;