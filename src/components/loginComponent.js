import React from 'react';
import LoginForm from './loginForm'

const loginComponent = (props) => {
    const styles = {
        headerText: {
            fontSize: 26,
            fontWeight: 'bold',
            color: '#333333',
            marginBottom: -15
        },
        secondaryHeaderText: {
            fontSize: 22,
            fontWeight: '500',
            color: '#333333'
        }
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#faf2ed', paddingTop:50 }}>
            <div style={{ width: '45%', justifyContent:'center', display:'flex', flexDirection:'column' }}>
                <p style={styles.headerText}>Simple GST Billing & Stock Management</p>
                <br/>
                <p style={styles.secondaryHeaderText}>Software for your business</p>
                <br/>
                <p>Atma nirbhar vyapaari bane</p>
            </div>

            <div style={{ width: '30%', padding: '25px 0', marginRight: 100 }}>
                <LoginForm phone={props.phone} otp={props.otp} onPress={props.onPress}/>
            </div>
        </div >
    )
}

export default loginComponent