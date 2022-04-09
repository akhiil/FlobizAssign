import React from 'react';
import MainLogo from '../assets/mbb_logo.svg'

const header = () => {
    const styles = {
        textStyle: {
            fontSize: 14,
            fontWeight: '500'
        }
    }

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            paddingTop: 10,
            paddingBottom: 10,
            boxShadow: '0px 5px 5px lightgray',
            marginBottom: 6
        }}>
            <div>
                <img src={MainLogo} alt="React Logo" />
            </div>

            <div style={{ display: 'flex', width: '50%', justifyContent: 'space-between' }}>
                <p style={styles.textStyle}>Why Use myBillBook?</p>
                <p style={styles.textStyle}>Who is it For?</p>
                <p style={styles.textStyle}>Online Store</p>
                <p style={styles.textStyle}>Retail POS</p>
                <p style={styles.textStyle}>Pricing</p>
            </div>
        </div>
    )
}

export default header;