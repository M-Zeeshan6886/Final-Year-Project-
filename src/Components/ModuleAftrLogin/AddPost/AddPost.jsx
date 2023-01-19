import React, { useEffect } from "react";
import "./AddPost.scss";
import LoginNavbar from "../../../Common Components/AftrLoginNavbar/LoginNavbar";
import Bodyleftbar from "../../../Common Components/MainbodyLeft/Bodyleftbar";
import "./AddPost.scss";
import { Link } from "react-router-dom";
import TextEditor from "jodit-react";
import { useRef } from "react";
import { useState } from "react";
import Footer from "../../../Common Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./../../../store/actions";

const AddPost = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.authReducer);
  const option = "";
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const editor = useRef(null);

  useEffect(() => {
    dispatch(getAllCategory());
  }, []);

  const handlePost = () => {
    console.log(`body is ${value} title is ${title} category is ${category}`);
  };
  return (
    <>
      <LoginNavbar />

      <div className="addpost-container">
        <div className="addpost-container-left">
          <Bodyleftbar />
        </div>
        <div className="addpost-container-right">
          <div className="addpost-container-right-content">
            <h1>Post a new disscussion</h1>
            <p>
              Start your discussion using the form below. It will need to be
              checked by our moderators first, so it won't appear straight away.
              Remember to choose a clear title and keep it short and sweet.
            </p>
            <p>Your post content is limited to 2500 characters.</p>

            <div className="addpost-container-right-content-inputfield">
              <input
                type="text"
                placeholder=" Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <select onChange={(e) => setCategory(e.target.value)}>
                <option>select catagory</option>
                {categories.length > 0 ? (
                  categories.map((item, ind) => {
                    return (
                      <option value={item.id} key={ind}>
                        {item.name}
                      </option>
                    );
                  })
                ) : (
                  <option>No Categories found</option>
                )}
              </select>
            </div>

            <div className="addpost-container-right-content-txtEditor-field">
              <TextEditor
                ref={editor}
                onChange={(content) => setValue(content)}
                // setValue={setValue}
              />
              <div className="addpost-container-right-content-btn">
                <Link to="" className="cancle-btn">
                  Cancle
                </Link>
                {/* <Link to="" className="post-btn" >Post</Link> */}
                <button onClick={() => handlePost()}>Post</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AddPost;
