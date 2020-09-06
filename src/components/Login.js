
// Imports from react
import React /*,  {useState} */ from 'react'

// Imports from material-ui
import { Button } from '@material-ui/core';

// Imports from another files
import '../styles/Login.css';
import { auth, provider } from '../firebase.js';
import { useStateValue } from '../StateProvider.js';
import { actionTypes } from '../reducer';

const Login = () => {

    // eslint-disable-next-line no-empty-pattern
    const [{}, dispatch] = useStateValue();

    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login__container">
            <div className="login__google">

                <div className="login__text">
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" alt="" />

                <div className="login__button">
                    <Button type="submit" onClick={signIn}>
                        Sign in with Google
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png" alt="" id="googleLogo" />
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Login;




