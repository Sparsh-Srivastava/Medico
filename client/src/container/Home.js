import React, { useState } from 'react'
import img from "./Auth/LoginDoc/undraw_authentication_fsn5 (2).svg"
 const Home = () => {

    const[Doctors ,updateDoctor]=useState([]);

    return (
        <div className="home">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="card bg-dark text-white">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" class="card-img" alt="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card bg-dark text-white">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" class="card-img" alt="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="card bg-dark text-white">
                        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" class="card-img" alt="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
                        <div class="card-img-overlay">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text">Last updated 3 mins ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
            </div>
            <div className="row">
                <div className="col-lg-9">
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
                <div className="col-lg-3">

                </div>
            </div>
            
        </div>
    )
}
export default Home;