import React, { useEffect, useState } from 'react'
import img from './3731957.jpg';
import './landing.css'
const Landing = () => {
    const [signvalid, updateSignValid] = useState('');

    const call = () => {
        updateSignValid(localStorage.getItem('signupvalid'))
    }

    useEffect((e) => {
        call();
    }, [])
    return (
        <div className="landing">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Medico</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
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
                                Sign-Up
                </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/signDoc">
                                    As a Doctor
                  </a>
                                <a className="dropdown-item" href="/signPt">
                                    As a Patient
                  </a>
                            </div>
                        </li>
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
                        {signvalid ?
                            <li className="nav-item">
                                <a className="nav-link" href="/dashboard">
                                    Dashboard <span className="sr-only"></span>
                                </a>
                            </li> : <li className="nav-item">
                                <a className="nav-link" href="#footer">
                                    Contact Us <span className="sr-only"></span>
                                </a>
                            </li>
                        }

                    </ul>
                </div>
            </nav>
            <div className="landingTitle">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <img src={img} alt="Online Doctor Illustration" />
                    </div>
                    <div className="col-lg-4 text-center">
                        <h1 className="siteHead">MEDICO</h1>
                        <h3 className="siteDesc">We'll be there when you need us the most</h3>
                    </div>
                </div>
                <div className="row align-items-center text-center features">
                    <div class="card col-md-3">
                        <i class="fas fa-comments fa-5x card-img-top"></i>
                        <div class="card-body">
                            <h5 class="card-title">We help you communicate better</h5>
                        </div>
                    </div>
                    <div class="card col-md-3">
                        <i class="fas fa-laptop-medical fa-5x card-img-top"></i>
                        <div class="card-body">
                            <h5 class="card-title">Find Medical Attention close to you</h5>
                        </div>
                    </div>
                    <div class="card col-md-3">
                        <i class="fab fa-creative-commons-share fa-5x card-img-top"></i>
                        <div class="card-body">
                            <h5 class="card-title">Share all your data at ease</h5>
                        </div>
                    </div>
                </div>
                <div className="aboutUs text-center">
                    <h1>About Us</h1>
                    We at Medico believe that nothing can be achieved alone. So, we have contributed with the community to bring to you Medico. This is portal for all your medical needs all rolled into one.
                    Wherever you are, whatever you need, whenever you need it, you can count on us.
                </div>
            </div>
            <footer className="text-center" id="footer">
                By Team Unique
                <br />

                <i class="fab fa-linkedin"></i>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
            </footer>
        </div>
    )
}
export default Landing;