import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./mainbody.scss";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "./../../../store/actions";
const Mainbody = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.authReducer);

  useEffect(() => {
    dispatch(getAllProduct());
  }, []);
  return (
    <>
      <div className="mainbody-container">
        <div className="mainbody-container-one">
          {products.length > 0
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
            : "No Product Found"}
        </div>
      </div>
    </>
  );
};

export default Mainbody;
