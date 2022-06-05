import { useEffect, useState } from 'react';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
//import Dropdown from '@material-tailwind/react/Dropdown';
//import DropdownItem from '@material-tailwind/react/DropdownItem';
//import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import { googleProvider } from '../config/authMethod';
import socialMediaAuth from '../service/auth';
import firebase from '../config/firebase';
import { Dropdown, DropdownItem, Icon } from '@material-tailwind/react';
import { Link, useHistory } from 'react-router-dom';

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const [isSignedIn, setIsSignedIn] = useState(false);

    const handleClick = (provider) => {
        socialMediaAuth(provider);
    }

    let history = useHistory();
    const logOut = (provider) => {
        firebase.auth().signOut();
        history.push("/");
    }

    useEffect(() => {
        firebase.auth().onAuthStateChanged(user => {
            setIsSignedIn(!!user);
        })
    });

    return (
        <Navbar color="transparent" navbar>
            <NavbarContainer>
                <NavbarWrapper>
                    <a
                        href="/"
                    >
                        <NavbarBrand>Triunvirato</NavbarBrand>
                    </a>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>

                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            <NavLink
                                href="https://discord.com/invite/MptD8AyJwp?utm_source=Discord%20Widget&utm_medium=Connect"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Unirse
                            </NavLink>
                                {isSignedIn 
                                    ? <div className="text-white">
                                        <Dropdown
                                            color="transparent"
                                            size="sm"
                                            buttonType="link"
                                            buttonText={
                                                <div className="py-2.5 font-medium flex items-center">
                                                    <Icon
                                                        name="person"
                                                        size="2xl"
                                                        color="white"
                                                    />
                                                    <span className="ml-2">
                                                        {firebase.auth().currentUser.displayName}
                                                    </span>
                                                </div>
                                            }
                                            ripple="light"
                                        >
                                            <Link to="/cuenta">
                                                <DropdownItem color="lightBlue">
                                                    Cuenta
                                                </DropdownItem>
                                            </Link>
                                                <DropdownItem color="lightBlue" onClick={() => logOut()}>
                                                    Cerrar sesión
                                                </DropdownItem>
                                        </Dropdown>
                                    </div>
                    
                                    : <Button
                                        onClick={() => handleClick(googleProvider)}
                                        color="transparent"
                                        className="bg-white text-black ml-4"
                                        ripple="dark"
                                    >
                                        Iniciar Sesión
                                    </Button>
                                }
                        </div>
                    </Nav>
                </NavbarCollapse>
            </NavbarContainer>
        </Navbar>
    );
}
