import React from 'react'
import img from './3731957.jpg';
import './landing.css'
const landing = () => {
    return (
        <div className="landing">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                    </li>
                    </ul>
                </div>
            </nav>
            <div className="landingTitle">
                <div className="row align-items-center">
                    <div className="col-lg-8">
                        <img src={img} alt="Online Doctor Illustration" />
                    </div>
                    <div className="col-lg-4 text-center">
                        <h3 className="siteDesc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus metus ipsum, condimentum ut vulputate in, molestie sit amet leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</h3>
                    </div>
                </div>
                <div className="row align-items-center text-center features">
                    <div class="card col-lg-2">
                    <i class="fas fa-hands-helping fa-5x card-img-top"></i> 
                        <div class="card-body">
                            <h5 class="card-title">Card title Card title Card title </h5>
                        </div>
                    </div>
                    <div class="card col-lg-2">
                        <i class="fas fa-hands-helping fa-5x card-img-top"></i> 
                        <div class="card-body">
                            <h5 class="card-title">Card title Card title Card title</h5>
                        </div>
                    </div>
                    <div class="card col-lg-2">
                        <i class="fas fa-hands-helping fa-5x card-img-top"></i> 
                        <div class="card-body">
                            <h5 class="card-title">Card title Card title Card title</h5>
                        </div>
                    </div>
                </div>
                <div className="aboutUs text-center">
                    <h1>About Us</h1>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi arcu nisl, ullamcorper quis sapien ut, fermentum rhoncus mi. Sed blandit felis ut nunc auctor, non mollis ante lacinia. Nullam vitae rutrum ex. Duis faucibus, nibh id auctor ultricies, elit lorem viverra sem, ut porta elit elit sit amet ligula. Nunc eget leo felis. Etiam vehicula molestie odio, quis hendrerit tellus luctus vel. Maecenas rutrum urna sed accumsan fermentum. In tincidunt ex lectus, nec ornare nibh ullamcorper vitae. Vivamus nunc nulla, pharetra et lacus et, aliquam rutrum libero. Maecenas cursus felis vitae aliquet faucibus. Praesent maximus, orci a sollicitudin faucibus, tellus ipsum tempor dui, in ultricies mauris metus dignissim diam. Nunc tincidunt ultrices commodo. Donec quis scelerisque tellus. Praesent vitae commodo arcu, ac venenatis est.
                </div>
            </div>
            <footer className="text-center">
                Footer will come here
            </footer>
        </div>
    )
}
export default landing;