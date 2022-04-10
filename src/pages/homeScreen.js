import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import LoginComponent from '../components/loginComponent'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import StaticBody from '../components/staticbody';


const HomePage = (props) => {
    const [phoneInput, setPhoneInput] = useState('');
    const [otpInput, setOtpInput] = useState('');


    const history = useHistory();

    const successfullNavigation = async () => {

        if (!phoneInput || !otpInput) {
            alert('Please enter phone and otp')
            return;
        }

        await axios.post('https://niobooks.in/api/web/authenticate', {
            "mobile_number": phoneInput,
            "otp_code": otpInput
        },
        ).then((res) => {
            console.log(res.data)
            if (res.data.token) {
                let userDetail = {
                    phone: phoneInput
                }
                localStorage.setItem(res.data.id, JSON.stringify(userDetail))
                if (localStorage.getItem(!res.data.mobile_number))
                    localStorage.setItem(res.data.mobile_number, "");
                history.push('/loggedIn', { id: res.data.id });
            } else {
                alert("please check mobile number and OTP")
            }
        }).catch((err) => {
            // console.log(err)
            alert("please check mobile number and OTP")
        })
    }

    return (
        <div>
            <Header />
            <LoginComponent onPress={successfullNavigation} phone={setPhoneInput} otp={setOtpInput} />
            <StaticBody />
        </div>
    )
}
export default HomePage;