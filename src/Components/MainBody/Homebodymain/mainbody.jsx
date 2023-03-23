import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./mainbody.scss";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  getAllProduct,
  getDisccsuion,
  clearErrors,
  clearMessages,
} from "./../../../store/actions";
const Mainbody = () => {
  const dispatch = useDispatch();
  const { errors, message, discData, loading } = useSelector(
    (state) => state.authReducer
  );
  const navigate = useNavigate("");

  useEffect(() => {
    if (errors.length > 0) {
      toast.error(errors);
      dispatch(clearErrors());
    }
    if (discData.length > 0) {
      setTimeout(() => navigate("/alldiscussion"), 2000);
    }
  }, [discData]);
  return (
    <>
      <div className="mainbody-container">
        <div className="mainbody-container-one">
          {/* {products.length > 0
            ? products.map((item, ind) => {
                return (
                  <div className="mainbody-container-one-dcard1">
                    <div className="mainbody-container-one-dcard1-content">
                      <span>Forum</span>
                      <hr />
                      <h1>{item.title}</h1>
                      <p>{item.body}</p>
                      <div className="mainbody-container-one-dcard1-content-lower1">
                        <span>Discussions</span>
                        <p>3456</p>
                      </div>
                      <div className="mainbody-container-one-dcard1-content-lower2">
                        <span>Posts</span>
                        <p>{products.length}</p>
                      </div>
                      <div className="mainbody-container-one-dcard1-content-viewmore">
                        <Link to="/disease" className="btn">
                          View more..
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })
            : "No Product Found"} */}

          <div className="mainbody-container-one-dcard1">
            <div className="mainbody-container-one-dcard1-content">
              <span>Forum</span>
              <hr />
              <h1>Anxiety</h1>
              <p>Anxiety Body</p>
              <div className="mainbody-container-one-dcard1-content-lower1">
                <span>Discussions</span>
                <p>3456</p>
              </div>
              <div className="mainbody-container-one-dcard1-content-viewmore">
                <p
                  className="btn"
                  onClick={() => dispatch(getDisccsuion("Anxiety"))}
                >
                  {loading ? "loading..." : "View more.."}
                </p>
              </div>
            </div>
          </div>
          <div className="mainbody-container-one-dcard1">
            <div className="mainbody-container-one-dcard1-content">
              <span>Forum</span>
              <hr />
              <h1>Depression</h1>
              <p>Depression Body</p>
              <div className="mainbody-container-one-dcard1-content-lower1">
                <span>Discussions</span>
                <p>3456</p>
              </div>
              <div className="mainbody-container-one-dcard1-content-viewmore">
                <p
                  className="btn"
                  onClick={() => {
                    dispatch(getDisccsuion("Depression"));
                  }}
                >
                  {loading ? "loading..." : "View more.."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mainbody-container">
        <div className="mainbody-container-one">
          <div className="mainbody-container-one-dcard1">
            <div className="mainbody-container-one-dcard1-content">
              <span>Forum</span>
              <hr />
              <h1>PTSD and trauma</h1>
              <p>PTSD and trauma</p>
              <div className="mainbody-container-one-dcard1-content-lower1">
                <span>Discussions</span>
                <p>3456</p>
              </div>
              <div className="mainbody-container-one-dcard1-content-viewmore">
                <p
                  className="btn"
                  onClick={() => dispatch(getDisccsuion("PTSD and trauma"))}
                >
                  {loading ? "loading..." : "View more.."}
                </p>
              </div>
            </div>
          </div>
          <div className="mainbody-container-one-dcard1">
            <div className="mainbody-container-one-dcard1-content">
              <span>Forum</span>
              <hr />
              <h1>Suicidal thoughts and self-harm</h1>
              <p>Suicidal thoughts and self-harm Body</p>
              <div className="mainbody-container-one-dcard1-content-lower1">
                <span>Discussions</span>
                <p>3456</p>
              </div>
              <div className="mainbody-container-one-dcard1-content-viewmore">
                <p
                  className="btn"
                  onClick={() => dispatch(getDisccsuion("PTSD and trauma"))}
                >
                  {loading ? "loading..." : "View more.."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mainbody;
