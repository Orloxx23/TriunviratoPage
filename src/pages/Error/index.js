import React from 'react';
import { Layout } from '../../layout'
import error from './img/404.svg'

import './error.css'

const Error = () => (
    <Layout>
        <div className="container-404">
            <center>
                <img src={error} alt="404"/>
                <h1>Página no econtrada</h1>
            </center>
        </div>

    </Layout>
)

export default Error;