import React, { useEffect } from "react";
import "./AddPost.scss";
// import LoginNavbar from "../../../Common Components/AftrLoginNavbar/LoginNavbar";
import Bodyleftbar from "../../../Common Components/MainbodyLeft/Bodyleftbar";
import "./AddPost.scss";
import { Link } from "react-router-dom";
import TextEditor from "jodit-react";
import { useRef } from "react";
import { useState } from "react";
import Footer from "../../../Common Components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory, addPost } from "./../../../store/actions";
import NavbarOne from "../../../Common Components/Navbar/Navbarbefor";

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
    const result = { title, category, body: value };
    dispatch(addPost(result));
  };

  return (
    <>
      {/* <LoginNavbar /> */}
      <NavbarOne />

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
                      <option value={item.name} key={ind}>
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
                onChange={(content) => {
                  setValue(content);

                  const text = content;
                  const data = document.createElement("div");
                  data.innerHTML = text;
                  const para = data.textContent || data.innerText || "";
                  console.log(para);
                }}
                setValue={setValue}
              />
              <input
                ref={editor}
                onChange={(content) => {
                  setValue(content);

                  const text = content;
                  const data = document.createElement("div");
                  data.innerHTML = text;
                  const para = data.textContent || data.innerText || "";
                  console.log(para);
                }}
                setValue={setValue}
              />
              <div className="addpost-container-right-content-btn">
                <Link to="" className="cancle-btn">
                  Cancle
                </Link>
                {/* <Link to=""  >Post</Link> */}
                <button className="post-btn" onClick={() => handlePost()}>
                  Post
                </button>
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
// import React, { useEffect } from "react";
// import "./AddPost.scss";
// import Bodyleftbar from "../../../Common Components/MainbodyLeft/Bodyleftbar";
// import "./AddPost.scss";
// import { Link } from "react-router-dom";
// import TextEditor from "jodit-react";
// import { useRef } from "react";
// import { useState } from "react";
// import Footer from "../../../Common Components/Footer/Footer";
// import { useDispatch, useSelector } from "react-redux";
// import { getAllCategory, addPost } from "./../../../store/actions";
// import NavbarOne from "../../../Common Components/Navbar/Navbarbefor";

// const AddPost = () => {
//   const dispatch = useDispatch();
//   const { categories } = useSelector((state) => state.authReducer);
//   const [value, setValue] = useState("");
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const editor = useRef(null);

//   useEffect(() => {
//     dispatch(getAllCategory());
//   }, []);

//   const handlePost = () => {
//     const result = { title, category, body: value };
//     dispatch(addPost(result));
//   };

//   return (
//     <>
//       <NavbarOne />

//       <div className="addpost-container">
//         <div className="addpost-container-left">
//           <Bodyleftbar />
//         </div>
//         <div className="addpost-container-right">
//           <div className="addpost-container-right-content">
//             <h1>Post a new discussion</h1>
//             <p>
//               Start your discussion using the form below. It will need to be
//               checked by our moderators first, so it won't appear straight away.
//               Remember to choose a clear title and keep it short and sweet.
//             </p>
//             <p>Your post content is limited to 2500 characters.</p>

//             <div className="addpost-container-right-content-inputfield">
//               <input
//                 type="text"
//                 placeholder=" Title"
//                 value={title}
//                 onChange={(e) => setTitle(e.target.value)}
//               />
//               <select onChange={(e) => setCategory(e.target.value)}>
//                 <option>select category</option>
//                 {categories.length > 0 ? (
//                   categories.map((item, ind) => {
//                     return (
//                       <option value={item.name} key={ind}>
//                         {item.name}
//                       </option>
//                     );
//                   })
//                 ) : (
//                   <option>No Categories found</option>
//                 )}
//               </select>
//             </div>

//             <div className="addpost-container-right-content-txtEditor-field">
//               <TextEditor
//                 ref={editor}
//                 onChange={(content) => {
//                   setValue(content);
//                 }}
//                 value={value}
//               />

//               <div
//                 className="preview-container"
//                 dangerouslySetInnerHTML={{ __html: value }}
//               ></div>

//               <div className="addpost-container-right-content-btn">
//                 <Link to="" className="cancel-btn">
//                   Cancel
//                 </Link>
//                 <button
//                   className="post-btn"
//                   onClick={() => handlePost()}
//                   disabled={!title || !category || !value}
//                 >
//                   Post
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default AddPost;
