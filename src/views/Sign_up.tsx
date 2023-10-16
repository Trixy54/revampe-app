import React from "react";
import{Link} from 'react-router-dom'

export default function Sign_up() {
  return (
    <React.Fragment>
      <div className="container container-pd">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 text-center sign-bordered ">
            <div className="">
              <p className="h3 d-inline mr-2 fs-3 !important; vertical-align: middle;">
                Sign Up
              </p>
              <img
                src="assets/imgs/logosign.png"
                className="sign-img d-inline"
                alt=""
              />

              <form className="">
                <div className=" mt-4 text-left text-secondary form-group">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    className=" form-control input-field"
                    placeholder="Full Name"
                  />
                </div>
                <div className=" text-left text-secondary form-group">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    className=" form-control input-field"
                    placeholder="Email Address"
                  />
                </div>
                <div className=" text-left text-secondary form-group">
                  <label className="form-label">Password</label>

                  <div className="input-group input-container">
                    <input
                      className="form-control py-2 border-right-0 border input-field2"
                      type="password"
                      placeholder="Password"
                    />
                    <span className="input-group-append ">
                      <div className="input-group-text bg-transparent">
                        <i className="fa fa-eye"></i>
                      </div>
                    </span>
                  </div>
                </div>

                <div className="text-left text-secondary form-group">
                  <label className="form-label">Confirm Password</label>

                  <div className="input-group input-container">
                    <input
                      className="form-control py-2 border-right-0 border input-field2"
                      type="password"
                      placeholder="Confirm Password"
                    />
                    <span className="input-group-append ">
                      <div className="input-group-text bg-transparent">
                        <i className="fa fa-eye"></i>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="pt-">
                  <button
                    className="w-100 btn btn-lg btn-primary "
                    type="submit"
                  >
                    Continue{" "}
                  </button>
                </div>
              </form>

              <p className="h5 mt-4 mb-4 or">OR</p>
              <div className="mt-">
                <button
                  className="w-100 btn btn-lg btn-primary btn-wide"
                  type="button"
                >
                  {" "}
                  <i className="fa fa-facebook pr-3 fs-2 !important;"></i>{" "}
                  Continue with Facebook
                </button>
                <button
                  type="button"
                  className="w-100 btn mt-2 btn-light border btn-lg btn-wide text-center"
                >
                  {" "}
                  <img
                    className="btn-img"
                    src="assets/imgs/google.png"
                    alt=""
                  />{" "}
                  Continue with Google
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4"></div>
          <div className="col-md-4 btn-re">
            <div className="mt-3">
              <p className="h5 text-center p-2 fs-2">
                Remember password?{" "}
                <Link className="a-font" to="">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </React.Fragment>
  );
}
