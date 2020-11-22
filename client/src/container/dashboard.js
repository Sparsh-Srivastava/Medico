import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import img from "./Auth/LoginDoc/undraw_authentication_fsn5 (2).svg";
import Axios from "axios";
import DoctorView from "./DoctorView/DoctorView";
/* import DoctorView from './DoctorView/DoctorView' */
const Home = () => {
    const [Doctors, updateDoctor] = useState([]);
    const [patient, updatePatient] = useState([]);

    const DoctorList = async () => {
        await Axios.get("http://localhost:5000/allDoctors")
            .then((res) => updateDoctor(res.data))
            .catch((err) => console.log(err));
    };
    const patientId = localStorage.getItem("patientId");

    const PatientInfo = async () => {
        await Axios.post("http://localhost:5000/getPatientInfo", { patientId })
            .then((res) => {
                {
                    updatePatient(res.data);
                }
                updatePatient(res.data);
                console.log(res.data);
            })
            .catch((err) => console.log(err));
    };
    console.log(patient, 'hello');

    useEffect((e) => {
        PatientInfo();
        DoctorList();
    }, []);

    let DoctorCard = Doctors.map((data) => {
        return (
            <div className="card rounded shadow-lg docInfo" key={data._id}>
                <div className="card-header text-center">
                    <h3>{data.name}</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{data.special}</h5>
                    <p className="card-text">{data.bio}</p>
                    <p className="card-text docState">{data.city}</p>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Link
                            to="/doctorView"
                            onClick={() => localStorage.setItem("id", data._id)}
                            className="btn rounded btn-primary profile"
                        >
                            Profile
                         </Link>
                    </div>
                    <div className="col-lg-6">
                        <a href="#" className="btn rounded btn-info chat">
                            Chat With the Doctor
            </a>
                    </div>
                </div>
            </div>
        );
    });


    let patientCard =
        <div className="patientInfo rounded  shadow-lg">
            <div className="card rounded">
                <div className="card-header text-center">
                    <h3>{patient.name}</h3>
                </div>
                <div className="card-body rounded text-center">
                    <h4>Your details</h4>
                    <div className="row">
                        <div className="col-lg-6">{patient.email}</div>
                        <div className="col-lg-6">{patient.blood}</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">{patient.age}</div>
                        <div className="col-lg-6">{patient.gender}</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">{patient.dob}</div>
                        <div className="col-lg-6">{patient.city}</div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">{patient.emergencyname}</div>
                        <div className="col-lg-6">{patient.emergencynum}</div>
                    </div>
                </div>
            </div>
        </div>
    return (
        <div className="home">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">
                    Medico
        </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav  ml-auto">
                        <a className="nav-link active" href="/">
                            Log-Out <span className="sr-only">(current)</span>
                        </a>
                    </div>
                </div>
            </nav>
            <div className="row">
                <div className="col-lg-12">
                    {patientCard}
                    <div className=" card rounded shadow-lg">
                        <h1 className="text-center sticky-top card-header">Recommended </h1>
                        <div className="allDocInfo card-body">{DoctorCard}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Home;
