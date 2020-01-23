import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import Card from '@material-ui/core/Card';
import bg from '../images/bg.jpg';
import Button from '@material-ui/core/Button';


class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };onSubmit = e => {
    e.preventDefault();const userData = {
      email: this.state.email,
      password: this.state.password
    };this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };render() {
    const { errors } = this.state;return (
      <div className="container" style={{ height: "90vh",width:"100%",maxWidth: "100%",backgroundImage:`url(${bg})`,backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover" }} >
        <div className="row">
          <Card className="col s8 offset-s2" style={{background: "#3f51b517", marginTop: "15px"}}>
            <div className="col s12" style={{ paddingLeft: "11.250px" , marginBottom: "9px" }}>
              <h5>
              <span><small> Welcome to Cyber World! </small>
               <small style={{float:  "right"}}>Good to see you again. <span role="img" aria-label="clap">👏</span> </small></span>
              </h5>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginBottom: "20px",
                    lineHeight: "0px",
                    background: "green"
                  }}
                  type="submit"
                  className="btn btn-medium waves-effect waves-light hoverable accent-3">
                  Login
                </button>

                <Link
                to="/"
                style={{
                  borderRadius: "3px",
                  marginLeft: "10px",
                  letterSpacing: "1.5px",
                  float: "right",
                  background:"red",
                }}
              >
                <Button style={{color: "white", fontWeight: "600"}}>Cancel</Button>
              </Link>
              </div>

              
            </form>
          </Card>
        </div>
      </div>
    );
  }
}Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});export default connect(
  mapStateToProps,
  { loginUser }
)(Login);