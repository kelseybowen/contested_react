import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Test = (props) => {

    const [test, setTest] = useState("");
    const {cookies, setCookies} = props;

    useEffect(() => {
        axios.get('http://localhost:5000/test', {
            headers: {
                'Authorization': `Bearer ${cookies['google_token']}`
            }
        }) 
            .then(res => {
                console.log(res)
                setTest(res.data)
            })
            .catch(err => console.log(err))
    })
    return (
        <div>
            <p>{test}</p>
        </div>
    )
}

export default Test