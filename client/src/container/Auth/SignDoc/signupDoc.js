import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import Select from "react-select";
import img from "./undraw_sign_in_e6hj.svg";
import "./signupDoc.css";
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
      // phone: "",
      address: "",
      location: "",
      photo: "",
      // valid: false,
      // userId: "",
    };
  }
  signup = async (e) => {
    e.preventDefault();
    await Axios.post("http://localhost:5000/registerDoc", {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      city: this.state.address,
      state: this.state.location,
      password2: this.state.password,
      special: this.state.special,
      bio: this.state.bio,
      photo: this.state.photo,
    })
      .then((res) => console.log("done"))

      .catch((err) => console.log(err));
  };
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleChange2(e) {
    this.setState({ location: e.value });
  }

  render() {
    const options = [
      { value: "Uttar Pradesh", label: "Uttar Pradesh" },
      { value: "Maharashtra", label: "Maharashtra" },
      { value: "Bihar", label: "Bihar" },
      { value: "West Bengal", label: "West Bengal" },
      { value: "Madhya Pradesh", label: "Madhya Pradesh" },
      { value: "Tamil Nadu", label: "Tamil Nadu" },
      { value: "Rajasthan", label: "Rajasthan" },
      { value: "Karnataka", label: "Karnataka" },
      { value: "Gujarat", label: "Gujarat" },
      { value: "Andhra Pradesh", label: "Andhra Pradesh" },
      { value: "Odisha", label: "Odisha" },
      { value: "Telangana", label: "Telangana" },
      { value: "Kerala", label: "Kerala" },
      { value: "Jharkhand", label: "Jharkhand" },
      { value: "Assam", label: "Assam" },
      { value: "Punjab", label: "Punjab" },
      { value: "Chattisgarh", label: "Chattisgarh" },
      { value: "Haryana", label: "Haryana" },
      { value: "Delhi", label: "Delhi" },
      { value: "Jammu and Kashmir", label: "Jammu and kashmir" },
      { value: "Uttarakhand", label: "Uttarakhand" },
      { value: "Himachal Pradesh", label: "Himachal Pradesh" },
      { value: "Tripura", label: "Tripura" },
      { value: "Meghalaya", label: "Mehghalaya" },
      { value: "Manipur", label: "Manipur" },
      { value: "Nagaland", label: "Nagaland" },
      { value: "Goa", label: "Goa" },
      { value: "Arunachal Pradesh", label: "Arunachal Pradesh" },
      { value: "Mizoram", label: "Mizoram" },
    ];

    if (this.state.valid) {
      localStorage.setItem("token", this.state.valid);
      localStorage.setItem("userId", this.state.userId);
    }
    if (this.state.valid) return <Redirect to="/"></Redirect>;

    return (
      <div className="signupDoc">
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
                <a className="nav-link" href="/#footer">
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
            <h4> Sign-Up for Doctor</h4>
            <form>
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
                data-interval="false"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
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
                          <i class="fas fa-check-circle fa-lg"></i>
                        </label>
                      </div>
                      <div className="col-sm-10">
                        <input
                          value={this.state.password2}
                          name="phone"
                          type="password"
                          placeholder="Re-Enter your Password"
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
                          value={this.state.photo}
                          type="text"
                          name="photo"
                          placeholder="Profile Photo link"
                          className="form-control"
                          aria-describedby="emailHelp"
                          onChange={this.handleChange}
                        ></input>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2">
                        <label>
                          <i className="fas fa-user-md fa-lg"></i>
                        </label>
                      </div>
                      <div className="col-sm-10">
                        <input
                          value={this.state.special}
                          name="special"
                          type="special"
                          placeholder="Enter Speciality "
                          className="form-control"
                          aria-describedby="emailHelp"
                          onChange={this.handleChange}
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-sm-2">
                        <label>
                          <i className="fas fa-map-marked-alt fa-lg"></i>
                        </label>
                      </div>
                      <div className="col-sm-10">
                        <Select
                          label="category"
                          name="location"
                          options={options}
                          onChange={this.handleChange2.bind(this)}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-2">
                        <label>
                          <i className="fas fa-info-circle fa-lg"></i>
                        </label>
                      </div>
                      <div className="col-sm-10">
                        <textarea
                          placeholder="Enter Bio"
                          rows="8"
                          value={this.state.bio}
                          name="bio"
                          type="bio"
                          className="form-control"
                          aria-describedby="emailHelp"
                          onChange={this.handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  onClick={this.signup}
                  className="btn btn-primary signInDocBtn"
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
