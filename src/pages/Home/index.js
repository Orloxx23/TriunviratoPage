import React from 'react';
import { Layout } from '../../layout'
import './home.css';
import logo from './img/logo.png'
import conoce from './img/minecraft.jpg'
import lol from './img/lol.jpg'
import valorant from './img/valorant2.jpg'
import { Link } from 'react-router-dom';

const Home = () => (
    <Layout>
        <div className="logo-container">
            <img className="img-logo" src={logo} />
        </div>
        <section>
            <div className="containers1">
                <div className="presentacion">
                    <div className="content">
                        <div className="item">
                            <center>
                                <div className="ico-item"><i class="fas fa-handshake"></i></div>
                                <div className="text-item">Conoce</div>
                            </center>
                        </div>
                        <div className="item">
                            <center>
                                <div className="ico-item"><i class="fas fa-gamepad"></i></div>
                                <div className="text-item">Juega</div>
                            </center>
                        </div>
                        <div className="item">
                            <center>
                                <div className="ico-item"><i class="fas fa-trophy"></i></div>
                                <div className="text-item">Compite</div>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containers2">
                <div className="conoce">
                    <div className="conoce-left">
                        <img src={conoce} className="conoce-img" />
                    </div>
                    <div className="conoce-right">
                        <p>En el servidor podras activar canales segun los juegos de tu interes.</p>
                        <p>Tambien podras hablar de cualquier otra cosa en el chat general.</p>

                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containers2">
                <div className="conoce">
                    <div className="conoce-left">
                        <img src={lol} className="conoce-img" />
                    </div>
                    <div className="conoce-right">
                        <p>Crea canales de voz para ti y tus amigos.</p>
                        <p>Comparte tus mejoras jugadas en el servidor.</p>

                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containers2">
                <div className="conoce">
                    <div className="conoce-left">
                        <img src={valorant} className="conoce-img" />
                    </div>
                    <div className="conoce-right">
                        <p>Busca tu equipo para subir en el ranking de clasificatorias.</p>

                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="containers1">
                <div className="card">
                    <center>
                        <h1>Comunidad Triunvirato</h1>
                        <hr />
                        <p>Juntos somos mas fuertes</p>
                        <Link className='nav-menu-link' exact to='/unirse'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i class="fab fa-discord"></i>
                            Unete!
                        </Link>
                    </center>
                </div>
            </div>
        </section>
        <div className="footer">
            <center>
                <p>Temporal page</p>
                <br/>
                <p>©Copyright Triunvirato All Rights Reserved</p>
                <p>Designed by Nikkeey</p>
            </center>
        </div>

    </Layout>
)

export default Home;