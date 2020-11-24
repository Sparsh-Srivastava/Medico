import React, { Component, useEffect } from "react";
// import React, { Component} from "react";
import { Route, Redirect, Link } from "react-router-dom";
// import { Redirect, Link } from "react-router-dom";
import img from "./undraw_secure_login_pdn4.svg";
import "./loginPt.css";
import Axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
      errMessage: " ",
      valid: false,
      userId: "",
      token: "",
    };
  }

  errMessage = " ";
  login = async (e) => {
    e.preventDefault();
    /*  fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
      })
      .catch((err) => {
        this.setState({ errMessage: err.message });
      }); */

    await Axios.post("http://localhost:5000/login", {
      email: this.state.email,
      password: this.state.password,
    })
      .then(
        (res) => {
          localStorage.setItem("patientId", res.data.id);
          localStorage.setItem("isLoggedIn", res.data.success);
          localStorage.setItem("patientToken", res.data.token);
          console.log(res);
          if (res.data.success) {
            this.props.history.push("/dashboard");
            toast.success("Welcome to medico", {
              position: "top-center",
              autoClose: 4500,
              closeOnClick: true,
              pauseOnHover: true,
            });
          } else {
            toast.error(res.data.error, {
              position: "top-center",
              autoClose: 4500,
              closeOnClick: true,
              pauseOnHover: true,
            });
          }
          this.setState({ token: res.data });
        }
        // this.setState({ valid: res.data.token, userId: res.data.userId })
        // console.log(res)
      )
      .catch((err) => console.log(err));

    console.log(localStorage.getItem("token"));

    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn) {
      <Redirect to="/"></Redirect>;
    }
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  /*   change() {
    this.setState({ valid: true });
  } */
  render() {
    if (this.state.valid) {
      localStorage.setItem("token", this.state.valid);
      localStorage.setItem("userId", this.state.userId);
    }
    if (this.state.valid) return <Redirect to="/"></Redirect>;
    return (
      <div className="logInPt">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Medico
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sign-Up
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/signDoc">
                    As a Doctor
                  </a>
                  <a className="dropdown-item" href="/signPt">
                    As a Patient
                  </a>
                </div>
              </li>
              {this.state.token ? (
                <li className="nav-item">
                  <a className="nav-link" href="/dashboard">
                    Dashboard<span className="sr-only"></span>
                  </a>
                </li>
              ) : (
                <li className="nav-item">
                  <a className="nav-link" href="/#">
                    Contact us<span className="sr-only"></span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </nav>
        <div className="row text-center">
          <div className="col-lg-8">
            <img alt="..." src={img} className="logImg" />
          </div>
          <div className="col-lg-4">
            <div className="shadow-lg p-3  rounded">
              <h2>Log In</h2>
              <div className="p-3">
                <form>
                  <div className="row">
                    <div className="col-sm-2">
                      <h6 className="head">
                        <i className="fas fa-envelope fa-lg"></i>
                      </h6>
                    </div>
                    <div className="col-sm-10">
                      <input
                        type="email"
                        className="form-control"
                        aria-describedby="emailHelp"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <h6 className="head">
                        <i className="fas fa-key fa-lg"></i>
                      </h6>
                    </div>
                    <div className="col-sm-10">
                      <input
                        name="password"
                        type="password"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                        id="password"
                        placeholder="Password"
                        value={this.state.password}
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={this.login}
                      className="btn btn-primary logInPtBtn"
                    >
                      Log In
                    </button>
                  </div>
                  New User? Sign Up as <Link to="/signDoc">Doctor</Link> or{" "}
                  <Link to="/signPt">Patient</Link>
                </form>
                <p className="para">{this.state.errMessage}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
