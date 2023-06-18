import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import {useCookies} from 'react-cookie';
import axios from 'axios';

const GLogin = (props) => {

    const navigate = useNavigate();
    const { cookies, setCookies } = props;

    const onSuccess = (credentialResponse) => {
        if (credentialResponse.credential != null) {
            const userCredential = credentialResponse.credential;
            console.log(credentialResponse);
            // TO DO: RESET EXPIRY DATE TO BE THE ACTUAL EXPIRY OF THE TOKEN
            let expiryDate = new Date(new Date().setHours(new Date().getHours() + 1));
            setCookies('google_token', userCredential, {expires: expiryDate});
            // check db for user
            
        }
        navigate('/dashboard')
    }

    const onError = () => {
        console.log('Login Failed');
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onError}
                auto_select
            />
        </div>
    )
}

export default GLogin