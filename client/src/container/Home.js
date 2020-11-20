import React, { useState } from 'react'
import img from "./Auth/LoginDoc/undraw_authentication_fsn5 (2).svg"
 const Home = () => {

    const[Doctors ,updateDoctor]=useState([]);

    return (
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav  ml-auto">
                    <a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
                    <a className="nav-link" href="#">Features</a>
                    <a className="nav-link" href="#">Pricing</a>
                </div>
            </div>
        </nav>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item row active">
        <div classNameName="row">
            <div classNameName="col-lg-8">
              <img src={img}  alt="..." />
            </div>
            <div classNameName="col-lg-4">
               Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <div classNameName="row">
            <div classNameName="col-lg-8">
              <img src={img}  alt="..." />
            </div>
            <div classNameName="col-lg-4">
               Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
            </div>
        </div>
    </div>
    <div className="carousel-item">
        <div classNameName="row">
                <div classNameName="col-lg-8">
                <img src={img}  alt="..." />
                </div>
                <div classNameName="col-lg-4">
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum
                </div>
            </div>
        </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
             <h1>RECOMMENDED</h1>

            <div className="card">
                <div className="card-header">
                Doctor1
                </div>
                <div className="card-body">
                    <h5 className="card-title">CARDIOLOGIST</h5>
                    <p className="card-text">accha ilaaz karuga ake toh dekho complain nhi ayi kabhi murdo se</p>
                    <a href="#" className="btn btn-primary">Profile</a>
                </div>
            </div>
            <div className="card">
                <div className="card-header">
                Doctor1
                </div>
                <div className="card-body">
                    <h5 className="card-title">CARDIOLOGIST</h5>
                    <p className="card-text">accha ilaaz karuga ake toh dekho complain nhi ayi kabhi murdo se</p>
                    <a href="#" className="btn btn-primary">Profile</a>
                </div>
            </div>
            
        </div>
    )
}
export default Home;