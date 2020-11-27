import React from "react";

const RecommendedDoctors = ({ city, name, email, special, photo }) => {
  return (
    <div className="doctor-box">
      <img src={photo}></img>
      <div className="doctor-info">
        <h3>Dr {name}</h3>
        <p>{email}</p>
        <i
          style={{ color: "rgb(16 73 101)", marginBottom: "10px" }}
          class="fas fa-map-marker-alt"
        >
          <h4>{city}</h4>
        </i>
        <h6>{special} (specialist)</h6>
      </div>
    </div>
  );
};

export default RecommendedDoctors;
