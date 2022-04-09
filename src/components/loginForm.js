import React from 'react'

export default function loginForm(props) {
    const styles = {
        headerText: {
            fontSize: 18,
            fontWeight: '500',
            padding: '10px 0'
        },
        normalText: {
            fontSize: 14,
            padding: '9px 0',
            color: '#575757'
        }
    }
    return (
        <div style={{ border: '1px solid #d1d1d1', width: '100%', backgroundColor: '#fff', padding: '50px 20px 50px 70px', borderRadius: 5, }}>
            <p style={styles.headerText}>Login to my Billbook</p>
            <p style={styles.normalText}>Enter Mobile Number</p>
            <div style={{ display: 'flex', marginBottom: 20 }}>
                <p style={{ ...styles.normalText, backgroundColor: 'lightgray', padding: 5, borderRadius: 2 }}>+91</p>
                <input style={{ width: '80%', height: 30, border: '1px solid #d1d1d1', padding: '0 5px' }} placeholder='Enter your phone number' />
            </div>
            <p style={styles.normalText}>Enter Your OTP</p>
            <div style={{ display: 'flex', marginBottom: 10 }}>
                <input style={{ width: '86%', height: 30, border: '1px solid #d1d1d1', padding: '0 5px' }} placeholder='One Time Password' />
            </div>
            <p style={styles.normalText}>Request OTP in 00:59 seconds</p>

            <button
            onClick={props.onPress}
            style={{ backgroundColor: '#cad3de', height: 45, width: '86%', border: '1px solid #d1d1d1' }}>
                <p style={styles.normalText}>Login</p>
            </button>
        </div>
    )
}

