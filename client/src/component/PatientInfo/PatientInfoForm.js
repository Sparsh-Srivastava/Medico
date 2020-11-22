import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import img from "./undraw_uploading_go67.svg";
import Axios from "axios";
import { localsName } from "ejs";
import Select from "react-select";
import "./PatientInfoForm.css"
class Signup extends Component {
  constructor(props) {
    super(props);
    this.postDetails = this.postDetails.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: "",
      email: "",
      phone: "",
      age: "",
      dob: "",
      city: "",
      blood: "",
      address: "",
      description: "",
      emergencyname: "",
      emergencynum: "",
      gender: "",
    };
  }
  postDetails = async (e) => {
    e.preventDefault();
    let id = localStorage.getItem("patientId");
    await Axios.post("http://localhost:5000/profile", {
      id: id,
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      age: this.state.age,
      dob: this.state.dob,
      city: this.state.location,
      blood: this.state.blood,
      address: this.state.address,
      description: this.state.description,
      emergencyname: this.state.emergencyName,
      medicalDetails: "xyz",
      emergencynum: this.state.emergencynum,
      gender: this.state.gender,
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
      <div className="signupPt patientInfo">
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
              <li className="nav-item">
                <a className="nav-link" href="/#">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/dashboard">
                  Dashboard <span className="sr-only"></span>
                </a>
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
            <h4> Fill your Details </h4>
            <form>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                <div class="carousel-item active">
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
                        <i className="fas fa-phone-alt fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.phone}
                        name="phone"
                        type="number"
                        placeholder="Enter Phone Number"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label>
                      <i class="fas fa-birthday-cake fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.age}
                        name="age"
                        type="number"
                        placeholder="Enter your Age"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label>
                      <i class="fas fa-calendar-day fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.dob}
                        name="dob"
                        type="text"
                        placeholder="Enter your DOB"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label>
                      <i class="fas fa-city fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.city}
                        name="city"
                        type="text"
                        placeholder="Enter your City"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                    <div className="row">
                    <div className="col-sm-2">
                      <label>
                        <i className="fas fa-tint fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.blood}
                        name="blood"
                        type="text"
                        placeholder="Enter your Blood group"
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
                        name="address"
                        type="text"
                        placeholder="Enter your Address"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label>
                        <i className="fas fa-info-circle fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.description}
                        name="description"
                        type="text"
                        placeholder="Enter your Description"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label>
                      <i class="fas fa-ambulance fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.emergencyname}
                        name="emergencyname"
                        type="text"
                        placeholder="Enter Emergency Name"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label>
                        <i class="fas fa-phone-alt fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.emergencynum}
                        name="emergencynum"
                        type="number"
                        placeholder="Enter your Emergency number"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-2">
                      <label>
                        <i class="fas fa-venus-mars fa-lg"></i>
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        value={this.state.gender}
                        name="gender"
                        type="text"
                        placeholder="Gender"
                        className="form-control"
                        aria-describedby="emailHelp"
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
              
              
              <div className="text-center">
                <button
                  type="submit"
                  onClick={this.postDetails}
                  className="btn btn-primary signInPtBtn"
                  style={{ marginTop: "20px" }}
                >
                  Submit
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
