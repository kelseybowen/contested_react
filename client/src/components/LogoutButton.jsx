import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = (props) => {
    const { setUser } = props;
    const navigate = useNavigate();

    function handleSignOut(e) {
        setUser({});
        navigate('/');
    }

    return (
        <div>
            <button className='btn btn-danger' onClick={(e) => handleSignOut(e)}>Sign Out</button>
        </div>
    )
}

export default LogoutButton