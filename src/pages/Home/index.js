import React from 'react';
import { Layout } from '../../layout'
import './home.css';
import './boton.css';
import logo from './img/logo.jpg'
import { Link } from 'react-router-dom';

const Home = () => (
    <Layout>
        <div className="main-container">
            <div className="logo-container">
                <img className="img-logo animate__animated animate__bounce" src={logo} alt="Triunvirato"/>
            </div>
            <div className="caract">
                <div className="content">
                    <div className="item">
                        <center>
                            <div className="ico-item"><i className="fas fa-handshake"></i></div>
                            <div className="text-item">Conoce</div>
                        </center>
                    </div>
                    <div className="item">
                        <center>
                            <div className="ico-item"><i className="fas fa-gamepad"></i></div>
                            <div className="text-item">Juega</div>
                        </center>
                    </div>
                    <div className="item">
                        <center>
                            <div className="ico-item"><i className="fas fa-trophy"></i></div>
                            <div className="text-item">Compite</div>
                        </center>
                    </div>
                </div>
            </div>
            <div className="unirte-btn">
                <Link exact="true" to="/unirse">
                    <button className="unete-btn">
                        <i className="fab fa-discord"></i>
                        Unete!
                    </button>
                </Link>
            </div>
            <div className="footer">
                <center>
                    <hr color="#616161" />
                    <p>Temporal page</p>
                    <br />
                    <p>©Copyright Triunvirato All Rights Reserved</p>
                    <p>Designed by Nikkeey</p>
                </center>
            </div>
        </div>
    </Layout>
)

export default Home;