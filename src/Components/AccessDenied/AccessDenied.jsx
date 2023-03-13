import React from "react";
import { Link } from "react-router-dom";

import "./AccessDenied.scss";
const AccessDenied = () => {
  return (
    <>
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <center>
                <div className="col-sm-10 col-sm-offset-1  text-center">
                  <div className="heading-for-access-im">
                    <h1 className="text-center ">Something went wrong</h1>
                  </div>
                  <div className="four_zero_four_bg"></div>
                  <center>
                    <div
                      className="contant_box_404"
                      style={{ fontSize: "4rem" }}
                    >
                      <h3 className="h2">Looks like you are lost</h3>

                      <p style={{ fontSize: "4rem" }}>
                        The page you are looking for is not available
                      </p>

                      <Link to="/" className="link_404">
                        Go to Home
                      </Link>
                    </div>
                  </center>
                </div>
              </center>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccessDenied;
