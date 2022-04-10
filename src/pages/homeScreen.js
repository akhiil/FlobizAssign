import React, { useEffect, useState } from 'react';
import Header from '../components/header'
import LoginComponent from '../components/loginComponent'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import StaticBody from '../components/staticbody';
// import Loader from 'react-loader'
import { ThreeDots } from 'react-loader-spinner'


const HomePage = (props) => {
    const [phoneInput, setPhoneInput] = useState('');
    const [otpInput, setOtpInput] = useState('');
    const [showLoader, setShowLoader] = useState(false)


    const history = useHistory();

    const successfullNavigation = async () => {

        if (!phoneInput || !otpInput) {
            alert('Please enter phone and otp')
            return;
        }

        setShowLoader(true);

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
                setShowLoader(false);
                history.push('/loggedIn', { id: res.data.id });
            } else {
                setShowLoader(false);
                alert("please check mobile number and OTP")
            }
        }).catch((err) => {
            // console.log(err)
            setShowLoader(false);
            alert("please check mobile number and OTP")
        })
        setShowLoader(false)
    }

    if (showLoader) {
        return (
            <div style={{
                display: 'flex',
                marginTop: '20%',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1 style={{ marginRight: 20, fontFamily: 'cursive' }}>Loading</h1>
                <ThreeDots
                    color="#1d184e"
                    height={100}
                    width={100}
                    timeout={100000} //3 secs
                />
            </div>
        )
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