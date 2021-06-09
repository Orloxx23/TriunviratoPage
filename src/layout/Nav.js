import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    state = {
        active: true
    }

    render() {
        return (
            <header className='header'>
                <nav className='nav'>
                    <Link className='logo' exact="true" to='/'>Triunvirato</Link>
                    <button aria-label={this.state.active ? 'Abrir menú' : 'Cerrar menú'} onClick={() => this.setState({active: !this.state.active})} className= 'nav-toggle'>
                        <i className="fas fa-bars"></i>
                    </button>
                    <ul className={this.state.active ? 'nav-menu' : 'nav-menu nav-menu_visible'}>
                        <li className='nav-menu-item'><Link className='nav-menu-link' exact="true" to='/unirse'>Unirse</Link></li>
                    </ul>
                </nav>
            </header>
        )
    }
}