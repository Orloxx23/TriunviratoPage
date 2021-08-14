import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { googleProvider } from '../config/authMethod';
import socialMediaAuth from '../service/auth';
import firebase from '../config/firebase';

export default class Nav extends Component {
    state = {
        active: true,
        isSignedIn: false
    }

    callbacks = {
        signInSuccess: () => false
    }
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(provider) {
        const res = socialMediaAuth(provider);
        console.log(res);
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

    render() {
        return (
            <header className='header'>
                <nav className='nav'>
                    <Link className='logo' exact="true" to='/'>Triunvirato</Link>
                    <button aria-label={this.state.active ? 'Abrir menú' : 'Cerrar menú'} onClick={() => this.setState({ active: !this.state.active })} className='nav-toggle'>
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className={this.state.active ? 'nav-menu' : 'nav-menu nav-menu_visible'}>
                        {/*<li className='nav-menu-item cuentaButton' onClick={() => this.handleClick(googleProvider)} >Iniciar Sesión</li>*/}
                        <li className='nav-menu-item'><Link className='nav-menu-link' exact="true" to='/unirse'>Unirse</Link></li>
                        {this.state.isSignedIn
                            ? <div className="dropdown-container"><span className='nav-menu-item cuentaButton'>{firebase.auth().currentUser.displayName}</span>
                                <ul>
                                    <li className='nav-menu-item'><Link className='nav-menu-link' exact="true" to='/unirse'>Cuenta</Link></li>
                                    <li className='nav-menu-item cuentaButton' onClick={() => firebase.auth().signOut()}><Link className='nav-menu-link' exact="true" to='/'>Cerrar sesion</Link></li>
                                </ul>
                              </div>
                            : <li className='nav-menu-item cuentaButton' onClick={() => this.handleClick(googleProvider)} >Iniciar Sesión</li>}
                    </ul>
                </nav>
            </header>
        )
    }
}