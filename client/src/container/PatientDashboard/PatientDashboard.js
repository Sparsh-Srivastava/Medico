import React, { useState, useEffect } from "react";
import RecommendedDoctors from "./RecommendedDoctors";
import Axios from "axios";
import "./PatientDashboard.css";

const PatientDashboard = (props) => {
  const [doctors, setDoctors] = useState([]);
  const [patient, setPatient] = useState([]);
  const [medical, setMedical] = useState([]);
  const getDoctors = async () => {
    await Axios.get("http://localhost:5000/allDoctors")
      .then((res) => {
        let doctorsList = [];
        // let mySet = new Set();
        let size = 6;
        for (let i = 0; i < size; i++) {
          let data = res.data[Math.floor(Math.random() * 6)];
          doctorsList[i] = data;
          // if (!mySet.has(data)) {
          // mySet.add(data);
          // }
        }
        console.log(doctorsList);
        // console.log(mySet);
        // setDoctors(mySet);
        setDoctors(doctorsList);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const patientId = localStorage.getItem("patientId");
  const getPatientInfo = async () => {
    await Axios.post("http://localhost:5000/patientInformation", {
      id: patientId,
    })
      .then((res) => {
        setPatient(res.data);
        setMedical(res.data.medicalDetails);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDoctors();
    getPatientInfo();
  }, []);

  let alldoctors = doctors.map((doctor) => {
    return (
      <RecommendedDoctors
        city={doctor.city}
        name={doctor.name}
        email={doctor.email}
        special={doctor.special}
        photo={doctor.photo}
      />
    );
  });

  const { city, name, email } = patient;
  const { dob, gender, phone, age, blood } = medical;

  return (
    <div className="profile-body">
      <div className="profile-info">
        <img
          className="profile-image"
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        ></img>
        <h3
          style={{
            fontWeight: "400",
            marginTop: "20px",
            color: "rgb(16 73 101)",
          }}
        >
          {name}
        </h3>
        <h4 className="date-of-birth">24 July,1920</h4>
        <h4 className="profile-city">{city}</h4>
        <hr />
        <br></br>
        <h3 className="profile-text-label">Email Address</h3>
        <h3 className="profile-info-text">{email}</h3>
        <h3 className="profile-text-label">Contact</h3>
        <h3 className="profile-info-text">+91 9212732647</h3>
      </div>
      <div className="recommended-doctors">
        <div className="doctors-heading">
          <h2>Recommended doctors</h2>
        </div>
        <hr></hr>
        <div className="doctors-field">{alldoctors}</div>
      </div>
      <div className="medical-info">
        <h2>Dashboard</h2>
        <hr></hr>
        <table className="patient-medical-table">
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Gender</td>
            <td className="patient-medical-data">{gender}</td>
          </tr>
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Age</td>
            <td className="patient-medical-data">{age}</td>
          </tr>
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Blood Grp</td>
            <td className="patient-medical-data">{blood}</td>
          </tr>
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Heart rate</td>
            <td className="patient-medical-data">68</td>
          </tr>
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Oxygen Level</td>
            <td className="patient-medical-data">97%</td>
          </tr>
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Blood Sugar</td>
            <td className="patient-medical-data">120%</td>
          </tr>
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Height</td>
            <td className="patient-medical-data">180(in cm)</td>
          </tr>
          <tr className="patient-medical-row">
            <td className="patient-medical-label">Weight</td>
            <td className="patient-medical-data">82 (in kg)</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default PatientDashboard;
