import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import {auth} from "./firebase";
import './Login.css';


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))

        
    }
    const register = e => {
        e.preventDefault();
        auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            console.log(auth);
            if(auth){
                history.push('/')
            }
        })
        .catch(error => alert(error.message))
    }
    return(
        <div className="login">
            <Link to='/'>
            <img className="login__logo" src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"/>
            </Link>
            <div className="login__container">
                <h1>Sign-in</h1>
                <from>
                    <h5 className="login__details">E-mail</h5>
                    <input className="login__input" type='text' value={email} onChange={e => setEmail(e.target.value)}/>
                    <h5 className="login__details">Password</h5>
                    <input  className="login__input" type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                    <button className="login__signInButton" type="submit" onClick={signIn}>Sign In</button>
                </from>
                <p>By continuing, you agree to this app's Conditions of Use and Privacy Notice.</p>
                <button className='login__registerButton' onClick={register}>Create your Amazon account</button>
            </div> 
        </div>
    )
}

export default Login;