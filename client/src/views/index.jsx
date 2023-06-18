import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import GLogin from '../components/GLogin';
import '../App.css';

const Index = (props) => {

    const { cookies, setCookies } = props;

    return (
        <div id='index-box'>
            <div className='d-flex justify-content-center p-2'>
                <h1 className='title-logo'>contested</h1>
            </div>
            <div className='d-flex justify-content-center p-2'>
                <GLogin cookies={cookies} setCookies={setCookies} />
            </div>
        </div>
    )
}

export default Index