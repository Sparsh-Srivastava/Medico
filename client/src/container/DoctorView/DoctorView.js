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
                        <div className="row  align-items-center">
                            <div className="col-lg-2 text-center">
                                <i class="far fa-user fa-9x"></i>
                            </div>
                            <div className="col-lg-10">
                                <h5 className="card-title">{data.name}</h5>
                                <h5 className="card-title">EMAIL</h5>
                                <h5 className="card-title">{data.special}</h5>
                                <h5 className="card-title">{data.bio}</h5>
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
            {DoctorCard}
        </div>
    )
}

export default DoctorView;
