import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import img from "./undraw_unlock_24mb.svg";
import "./signupPt.css";
import Axios from "axios";
import { localsName } from "ejs";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.signup = this.signup.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: "",
      password: "",
      name: "",
      phone: "",
      address: "",
      location: "",
      valid: false,
      userId: "",
    };
  }
  signup = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:5000/register", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      city: this.state.location,
    })
      .then((res) => console.log("done"))
      .catch((err) => console.log(err));
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  render() {
    if (this.state.valid) {
      localStorage.setItem("token", this.state.valid);
      localStorage.setItem("userId", this.state.userId);
    }
    if (this.state.valid) return <Redirect to="/"></Redirect>;

    return (
      <div className="signupPt">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            Navbar
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
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
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
                  Log In
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="/loginDoc">
                    As a Doctor
                  </a>
                  <a className="dropdown-item" href="/loginPt">
                    As a Patient
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Contact Us <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="rounded row">
          <div className="col-lg-8">
            <img alt="..." src={img} />
          </div>
          <div className="col-lg-4 shadow-lg text-center rounded">
            <h4> Sign-Up for Patient </h4>
            <form>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-signature fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your Name"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                    value={this.state.name}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label htmlFor="exampleInputEmail1">
                    <i className="fas fa-envelope fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    value={this.state.email}
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-key fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    value={this.state.password}
                    name="password"
                    type="password"
                    placeholder="Enter Password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-phone-alt fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    value={this.state.phone}
                    name="phone"
                    type="Number"
                    placeholder="Enter your Phone No"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-city fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    value={this.state.address}
                    type="text"
                    name="address"
                    placeholder="Enter your City"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-2">
                  <label>
                    <i className="fas fa-map-marked-alt fa-lg"></i>
                  </label>
                </div>
                <div className="col-sm-10">
                  <input
                    value={this.state.location}
                    type="text"
                    name="location"
                    placeholder="Enter your State"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.handleChange}
                  ></input>
                </div>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={this.signup}
                  className="btn btn-primary signInPtBtn"
                  style={{ marginTop: "20px" }}
                >
                  Sign-up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;
