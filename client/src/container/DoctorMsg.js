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

  useEffect((e) => {
    fetchMsg();
  }, []);
  let card = msg.map((data) => {
    return (
      <div>
        <h1>{data.name}</h1>
        <h2>{data.email}</h2>
        <h3>{data.description}</h3>
      </div>
    );
  });
  return <div>{card}</div>;
};

export default DoctorMsg;
