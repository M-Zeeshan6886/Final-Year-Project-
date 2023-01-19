import React from 'react'
import './AddPost.scss';
import NavbarOne from '../../../Common Components/Navbar/Navbarbefor';
// import LoginNavbar from '../../../Common Components/AftrLoginNavbar/LoginNavbar';
import Bodyleftbar from '../../../Common Components/MainbodyLeft/Bodyleftbar';
import './AddPost.scss';
import { Link } from 'react-router-dom';
import TextEditor from 'jodit-react';
import { useRef } from 'react';
import {useState} from "react";
import Footer from '../../../Common Components/Footer/Footer';


const AddPost = () => {
    const option=""
    const [value, setValue] =useState("");
const editor = useRef(null);
  return (
    <>
    {/*<LoginNavbar />*/}
    <NavbarOne />

    <div className="addpost-container">
        <div className='addpost-container-left'>
            <Bodyleftbar />
        </div>
        <div className='addpost-container-right'>
            <div className='addpost-container-right-content'>
            <h1>Post a new disscussion</h1>
             <p>Start your discussion using the form below. It will need to be
                 checked by our moderators first, so it won't appear straight away. 
                 Remember to choose a clear title and keep it short and sweet.</p>
                 <p>Your post content is limited to 2500 characters.</p> 

                 <div className="addpost-container-right-content-inputfield">
                <input type="text" placeholder=' Title' />
                <select>
                    <option>select catagory</option>
                    <option value={1}>Anxiety</option>
                    <option value={2}>Depression</option>
                    <option value={3}>PTSD and trauma</option>
                    <option value={4}>Suicidial thought and self-harm</option>
                </select>
            </div>


            <div className='addpost-container-right-content-txtEditor-field'>
                <TextEditor 
                ref={editor} onChange={(content) => {setValue(content);
                
                
                
                const text = content;
                  const data = document.createElement("div");
                  data.innerHTML = text;
                  const para = data.textContent || data.innerText || "";
                  console.log(para);
                }}
                setValue={setValue}

                

                />
                 <div className="addpost-container-right-content-btn">
                <Link to="" className="cancle-btn" >Cancle</Link>
                <Link to="" className="post-btn" >Post</Link>
                 </div>
            </div>


            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default AddPost;