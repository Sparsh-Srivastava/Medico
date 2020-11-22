import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import './DoctorView.css'
const DoctorView = () => {

    const [Doctors, updateDoctor] = useState([]);

    const DoctorList = async () => {
        await Axios.get('http://localhost:5000/allDoctors')
            .then(res => updateDoctor(res.data))
            .catch(err => console.log(err));
    }



    useEffect((e) => {
        DoctorList();
    }, []);

    console.log('hellow v')
    console.log(Doctors)

    let DoctorCard = Doctors.filter(data => data._id === localStorage.getItem('id')).map(data => {
        return (
            
            <div className="allDocInfo" key={data._id}>

                <div className="card rounded shadow-lg docInfo">
                    <div className="card-header rounded text-center" >
                        <h3>Your Profile</h3>
                    </div>
                    <div className="card-body">
                        <div className="row  ">
                            <div className="col-lg-2 text-center">
                                <i class="far fa-user fa-9x"></i>
                            </div>
                            <div className="col-lg-10">
                                <h5 className="card-title name">{data.name}</h5>
                                <h5 className="card-title special">{data.special}</h5>
                                <h5 className="card-title email">EMAIL</h5>
                                <h5 className="card-title bio">{data.bio}</h5>
                                <h5 className="card-title docState" >{data.city}</h5>
                            </div>
                        </div>
                    </div>
                    <div class="input-group">
                        <input type="text" class="form-control sendInput" placeholder="Your Message" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div class="input-group-append">
                            <button class="btn btn-info sendBtn" type="button" id="button-addon2">Send</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="profileDoc">
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
                <a className="nav-link" href="/#">
                  Contact Us <span className="sr-only"></span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
            {DoctorCard}
        </div>
    )
}

export default DoctorView;
