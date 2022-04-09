import React, { useEffect } from 'react';
import Header from '../components/header'
import LoginComponent from '../components/loginComponent'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import StaticBody from '../components/staticbody';


const HomePage = (props) => {
    // useEffect(async () => {
    //     await axios.post('https://niobooks.in/api/web/authenticate', {
    //         "mobile_number": "8210706721",
    //         "otp_code" : "1234"
    //     }, 
    //     // {
    //     //     headers: {
    //     //         accept: 'application/json',
    //     //         'content-type': 'application/json',
    //     //         client: 'web'

    //     //     }
    //     // }
    //     ).then((res) => {
    //         console.log(res.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }, [])

    const history = useHistory();

    const successfullNavigation = () => {
        history.push('/loggedIn');
    }

    return (
        <div>
            <Header />
            <LoginComponent onPress={successfullNavigation} />
            <StaticBody />
            <h1>Home page</h1>
        </div>
    )
}
export default HomePage;