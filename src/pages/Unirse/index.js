import React from 'react';
import { Layout } from '../../layout'
import './unirse.css'
import logo from './img/logoText.png'

const Unirse = () => (
    <Layout>
        <div className="container-box">
            <div className="content-box">
                <div className="content-left">
                    <center>
                        <img src={logo} className="content-img" />
                    </center>
                </div>
                <div className="content-rigt">
                    <iframe src="https://discord.com/widget?id=612349868182077462&theme=light"
                        className="discord"
                        allowtransparency="true"
                        frameborder="0"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" />

                </div>
            </div>
        </div>
    </Layout>
)

export default Unirse;