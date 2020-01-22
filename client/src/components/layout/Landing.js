import React, { Component } from "react";
import { Link } from "react-router-dom";class Landing extends Component {
  render() {
    return (
                
      <div style={{ height: "50vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            <h5>
              <b>Build</b> a login/auth app with the{" "}
              <span style={{ fontFamily: "monospace" }}>MERN</span>
            </h5>
            <h6 className="flow-text grey-text text-darken-1">
              <small>For more information check the repo <a href="url">here</a></small>
            </h6>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable lightblue accent-3"
              >
                Register
              </Link>
            </div>
            <div className="col s6">
              <Link
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="btn btn-large waves-effect waves-light hoverable lightblue accent-3"
              >
                Log In
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}export default Landing;