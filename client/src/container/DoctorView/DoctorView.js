import React, { useEffect, useState } from 'react'
import Axios from 'axios'

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

            <div className="allDocInfo card-body" key={data._id}>

                <div className="card rounded shadow-lg docInfo">
                    <div className="card-header text-center" >
                        <h3>{data.name}</h3>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{data.special}</h5>
                        <p className="card-text">{data.bio}</p>
                        <p className="card-text docState" >{data.city}</p>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            {/*  <Link to='/doctorView' onClick={() => localStorage.setItem('id', data._id)}>Profile</Link> */}
                        </div>
                        <div className="col-lg-6">
                            <a href="#" className="btn rounded btn-info chat">Chat With the Doctor</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    })
    return (
        <div>
            {DoctorCard}
        </div>
    )
}

export default DoctorView;
