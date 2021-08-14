import React, { useRef } from 'react'
import { auth } from '../firebase';

function Login() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user);
        }).catch(err => {
            console.log(err);
        })
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div>
            <from action="">
                <h1>Iniciar sesion</h1>
                <input type="email" ref={emailRef} id="email" placeholder="email" required />
                <input type="password" ref={passwordRef} id="password" placeholder="password" required />
                <button onClick={signIn}>Entrar</button>
                <span onClick={signUp}>Crear cuenta</span>
            </from>
        </div>
    )
}

export default Login;
