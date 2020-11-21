import React, { useEffect, useState } from "react";
import Axios from "axios";

const DoctorMsg = () => {
  let [msg, setMsg] = useState([]);
  let doctorId = localStorage.getItem("doctorId");
  const fetchMsg = async () => {
    await Axios.post("http://localhost:5000/getDoctorInfo", { id: doctorId })
      .then((res) => {
        console.log(res);
        setMsg(res.data.patientMessages);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getPatientMedicalReport = async (id) => {
    await Axios.post("http://localhost:5000/patientInformation", { id })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const sendMessageToPatient = async (doc, pat) => {
    await Axios.post("http://localhost:5000/contactPatient", {
      doctorId: doc,
      patientId: pat,
      replyMessage: "Pitega Bohot Tu",
    })
      .then((res) => {
        console.log("Done");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect((e) => {
    fetchMsg();
  }, []);
  let card = msg.map((data) => {
    return (
      // <div>
      //   <h1>{data.name}</h1>
      //   <h2>{data.email}</h2>
      //   <h3>{data.description}</h3>
      // </div>
      <div class="card">
        <div class="card-header">Patient : {data.name}</div>
        <div class="card-body">
          <h5 class="card-title">Email : {data.email}</h5>
          <p class="card-text">{data.description}</p>
          <p>{data._id}</p>
          <a
            href="#"
            class="btn btn-primary"
            id={data._id}
            onClick={() => getPatientMedicalReport(data.patientId)}
          >
            Medical Report
          </a>
          <a
            href="#"
            class="btn btn-primary"
            onClick={() => sendMessageToPatient(data.doctorId, data.patientId)}
          >
            Reply
          </a>
        </div>
      </div>
    );
  });
  return <div>{card}</div>;
};

export default DoctorMsg;
