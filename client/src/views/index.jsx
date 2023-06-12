import React, { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';


// import {} from '../Context';

const Index = (props) => {

    const { cookies, setCookie, removeCookie } = props;

    const clientId = "416332037370-6s6hk3ng74ip1t6flp0idnsg39v9o97f.apps.googleusercontent.com"
    const navigate = useNavigate();

    // useEffect(() => {
    //     // check if cookie exists
    //     if ('google-token' in cookies) {
    //         if ()
    //     }
    //     // if yes, check if expired
    //     // else redirect to login
    // })

    // const setCookieExp = () => {
    //     let expiryDate = new Date(new Date().setHours(new Date().getHours() + 1));
    //     console.log(expiryDate)
    //     return expiryDate;
    // }

    const onSuccess = (res) => {
        // setCookie('google-token', res.tokenId, { 'expires': setCookieExp()});
        navigate('/dashboard')
        // console.log("Login Success. Current user: ", res.tokenId);
    }

    const onFailure = (res) => {
        console.log("Login Failed. res: ", res);
    }

    const [displayLogin, setDisplayLogin] = useState(true);

    return (
        <div className='container-fluid'>
            <div id='signInButton'>
                <GoogleLogin
                    clientId={clientId}
                    buttonText='Login'
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                />
            </div>

        </div>
    )
}

export default Index