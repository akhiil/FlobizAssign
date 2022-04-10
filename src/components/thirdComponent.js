import React from 'react'
import WhatsApp from '../assets/icn_whatsapp.svg'
import message from '../assets/icn_chat with us.svg'
import Linkdin from '../assets/icn_linkedin.svg'
import Youtube from '../assets/icn_youtube.svg'
import Facebook from '../assets/icn_Facebook.svg'
import Twitter from '../assets/icn_Twitter.svg'
import Instagram from '../assets/icn_instagram.svg'
export default function thirdComponent() {
    const thirddiv = {
        mainCont: {
            height: '250px',
            width: '100%',
            // border:'2px solid red',
        },
        UpperCont: {
            height: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            // border:'2px solid red',
        },
        uppercontSmall: {
            height: '100%',
            width: '25%',
            display: 'flex',
            'flex-direction': 'column',
            justifyContent: 'center',
            alignItems: 'center',
            // border:'2px solid red',
        },
    }
    return (
        <div style={{ 'margin-top': '70px', }} >
            <div style={{...thirddiv.mainCont}} >

                <div style={{ ...thirddiv.UpperCont, alignItems: 'center' }}>
                    <div style={{ ...thirddiv.uppercontSmall, width: '40%' }}>

                    <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>

                        <h2 style={{ color: '#db631a', padding: '5px' }}>Get in touch</h2>

                        <li style={{ padding: '5px', listStyle: 'none' }}>help@flobiz.in</li>
                        <li style={{ padding: '5px', listStyle: 'none', fontWeight: 'bold', fontSize: '30px' }}><span >+91 74004 17400</span></li>
                        <div style={{ width: 'auto', height: 'auto', padding: '5px', display: 'flex' }}>

                            <button style={{ margin: '10px', cursor: 'pointer', border: 'none', width: '170px', height: '50px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#deffea' }}>
                                <img src={WhatsApp} style={{ margin: '5px' }} />
                                <h3 style={{ color: 'green' }}>WhatsApp us</h3>
                            </button>
                            <button style={{ margin: '10px', border: 'none', cursor: 'pointer', width: '170px', height: '50px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', 'background-color': 'rgb(201, 218, 255)' }}>
                                <img src={message} style={{ margin: '5px' }} />
                                <h3 style={{ color: 'blue' }}>Chat with us</h3>
                            </button>
                        </div>
                        </div>
                    </div>
                    <div style={thirddiv.uppercontSmall}>
                        <h2 style={{ color: '#db631a' }}>Information</h2>
                        <ul style={{ listStyle: 'none', padding: '10px' }}>
                            <li style={{ padding: '10px' }}>Refund Policy</li>
                            <li style={{ color: '#db631a', padding: '10px' }}>Privecy Policy</li>
                            <li style={{ padding: '10px' }}>Terms & Condition</li>
                        </ul>
                    </div>
                    <div style={thirddiv.uppercontSmall}>
                        <ul style={{ listStyle: 'none', padding: '10px' }}>
                            <li style={{ padding: '10px' }}>FAQ'S</li>
                            <li style={{ color: '#db631a', padding: '10px' }}>Pricing</li>
                            <li style={{ padding: '10px' }}>Flobiz Business Group</li>
                            <li style={{ padding: '10px' }}>Blogs</li>
                        </ul>
                    </div>
                    <div style={{ ...thirddiv.uppercontSmall, width: '40%'}}>
                        <div style={{display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                        <h2 style={{ color: '#db631a' }}>Follow us</h2>
                        <div style={{ display: 'flex',width:'320px',margin:'10px',justifyContent:'space-between' ,padding:'10px' }}>
                            <img src={Facebook} />
                            <img src={Twitter} />
                            <img src={Youtube} />
                            <img src={Instagram} />
                            <img src={Linkdin} />
                        </div>
                        <h4>FlowBooks is a product of Flobiz</h4>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}