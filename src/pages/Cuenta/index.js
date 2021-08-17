import React, { Component } from 'react';
import firebase from '../../config/firebase';
import { Formik, Field, Form } from 'formik';
import gaming from './img/Gaming.svg';
import { googleProvider } from '../../config/authMethod';
import socialMediaAuth from '../../service/auth';
import './cuenta.css';
require("firebase/firestore")

var db = firebase.firestore();

export default class Cuenta extends Component {

    state = {
        isSignedIn: false,
        info: {}
    }

    callbacks = {
        signInSuccess: () => false
    }

    handleClick(provider) {
        socialMediaAuth(provider);

    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })

        if (firebase.auth().currentUser) {
            var docRef = db.collection("usuarios").doc(firebase.auth().currentUser.uid);

            docRef.get().then((doc) => {
                if (doc.exists) {
                    //datos = doc.data();
                    this.setState({ info: doc.data() })
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }



    }

    render() {
        return (
            <div className="cuenta-container">
                {this.state.isSignedIn
                    ? <div className="cuenta">
                        <div className="cuenta-iz">
                            <img src={firebase.auth().currentUser.photoURL} alt="Foto de perfil" />

                        </div>
                        <div className="cuenta-de">
                            <h1>{firebase.auth().currentUser.displayName}</h1>
                            <Formik
                                initialValues={{
                                    discordId: '',
                                    twitch: '',
                                    youtube: '',
                                    correo: '',
                                }}
                                onSubmit={async (values) => {
                                    if (values.discordId !== "" || values.twitch !== "" || values.youtube !== "") {
                                        await db.collection("usuarios").doc(firebase.auth().currentUser.uid).set({
                                            discordId: values.discordId,
                                            twitch: values.twitch,
                                            youtube: values.youtube,
                                            correo: firebase.auth().currentUser.email
                                        }).then(() => {
                                            alert("Datos guardados correctamente")
                                        })
                                            .catch((error) => {
                                                console.error("Error adding document: ", error);
                                            });
                                    }



                                }}
                            >
                                <Form>
                                    <label htmlFor="discordId"><i className="fab fa-discord"></i></label>
                                    <Field className="field" id="discordId" name="discordId" placeholder={this.state.info.discordId !== "" ? this.state.info.discordId : "Triunvi#0001"} />
                                    <br />

                                    <label htmlFor="twitch"><i className="fab fa-twitch"></i></label>
                                    <Field className="field" id="twitch" name="twitch" placeholder={this.state.info.twitch !== "" ? this.state.info.twitch : "twitch.tv/triunvi"} />
                                    <br />

                                    <label htmlFor="youtube"><i className="fab fa-youtube"></i></label>
                                    <Field className="field"
                                        id="youtube"
                                        name="youtube"
                                        placeholder={this.state.info.youtube !== "" ? this.state.info.youtube : "Triunvi"}

                                    />
                                    <br />
                                    <button className="btn-submit" type="submit">Guardar</button>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                    : <div className="noLogin">
                        <div className="noLogin-iz">
                            <h1>Aun no has iniciado sesión</h1>
                            <div className="wrapper">
                                <span className="button" onClick={() => this.handleClick(googleProvider)}>Entrar</span>
                            </div>
                            <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" version="1.1">
                                <defs>
                                    <filter id="goo"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                                        <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                                    </filter>
                                </defs>
                            </svg>
                        </div>
                        <div className="noLogin-de">
                            <img src={gaming} alt="Inicia sesion" />
                        </div>
                    </div>}
            </div>
        )
    }
}
