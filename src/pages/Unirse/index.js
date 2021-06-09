import React from 'react';
import { Layout } from '../../layout'
import './unirse.css'
import './glitch.css'
import logo from './img/logoText.png'

const Unirse = () => (
    <Layout>
        <div className="container-box">
            <div className="content-box">
                <div class="mask"></div>
                <div className="content-left">
                    <center>
                        <div className="glitch-img">
                        <img src={logo} className="content-img op" alt="Triunvirato" />
                            <img src={logo} className="content-img p-a" alt="Triunvirato" />
                            <img src={logo} className="content-img p-a" alt="Triunvirato" />
                            <img src={logo} className="content-img p-a" alt="Triunvirato" />
                            
                        </div>
                    </center>
                </div>
                <div className="content-rigt">
                    <iframe src="https://discord.com/widget?id=612349868182077462&theme=light"
                        className="discord"
                        allowtransparency="true"
                        frameBorder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />
                </div>

            </div>
        </div>
    </Layout>
)

export default Unirse;