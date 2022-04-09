import React from 'react'
import Pricing from '../assets/icn_pricing_crown.svg'
import Device from '../assets/icn_devices.svg'
import Tick from '../assets/icn_ic_check-fill.svg'

const EachComponent = (props) => {
    return (<div style={second.secondmain2}>
        <div style={second.secondmain21}>
            <img style={{ height: '30px', width: '30px', 'margin-left': '18px' }} src={Pricing} alt='Error' />
            <h1 style={{ margin: '5px', 'margin-left': '18px' }} >{props.type === 'silver' ? 'Silver' : props.type === 'gold' ? 'Gold' : 'Diamond'} Plan</h1>
            <h4 style={{ margin: '5px', 'margin-left': '18px' }} >{props.type === 'silver' ? '799' : props.type === 'gold' ? '1799' : '3500'} /year</h4>

        </div>
        <div style={{ ...second.secondmain22, backgroundColor: props.type === 'silver' ? '#c9daff' : props.type === 'gold' ? '#faffd4' : '#ffe7bb' }}>
            <img src={Device} alt='Error' style={{ 'margin-right': '18px' }} />
            <h1 style={{ fontSize: '20px', }}>Mobile+Desktop</h1>
        </div>
        <div style={second.secondmain23}>
            {/* #ffe7bb */}
            {/* '#1d1dc1' */}
            {/* ...props.type=== 'silver' ? '#c9daff' : props.type === 'gold' ? '#faffd4' : '#ffe7bb' */}
            <ul style={{ listStyle: 'none' }}>
                <li style={{ margin: '14px' }}> <span>{<img src={Tick} />}</span> {props.type === 'silver' ? 'Unlimited Stock adjusment' : props.type === 'gold' ? 'All Silver Features' : 'All Gold & Silver Features '} </li>
                <li style={{ margin: '14px' }}> <span>{<img src={Tick} />}</span> {props.type === 'silver' ? 'GST Report,Profit & Loss Report' : props.type === 'gold' ? 'Add upto 5 Stuff to MybillBook' : 'Add unlimited Stuff to MybillBook'} </li>
                <li style={{ margin: '14px' }}> <span>{props.type !== 'diamond' ? <img src={Tick} /> : null}</span> {props.type === 'silver' ? 'Remove MyBillBook logo from Invoice' : props.type === 'gold' ? 'Unlimited Mobile + Desktop Logins' : ''} </li>
                <li style={{ margin: '14px' }}> <span>{props.type === 'silver' ? <img src={Tick} /> : null}</span> {props.type === 'silver' ? 'Only Mobile device supported ' : props.type === 'gold' ? '' : ''} </li>
                <li style={{ margin: '14px' }}> <span>{props.type === 'silver' ?<img src={Tick} />:null}</span> {props.type === 'silver' ? '+5 more Features' : props.type === 'gold' ? '' : ''} </li>


            </ul>
        </div>
    </div>)
}

export default function secondComponent() {

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '10px' }}>
            <div style={second.secondmainCont} >

                <EachComponent type="silver" />
                <EachComponent type="gold" />
                <EachComponent type="diamond" />
            </div>
        </div>
    )
}

const second = {
    secondmainCont: {
        // border: '2px solid red',
        height: '400px',
        display: 'flex',
        'justify-content': 'center',
        'align-item': 'center',
        width: '80%',
        // margin: '0px 90px',
        // 'margin-top': '30px',
        // padding:'30px'
    },
    secondmain2: {
        border: '1px solid grey',
        height: '100%',
        width: '30%',
        margin: '10px',
        'border-radius': '9px'
    },
    secondmain21: {
        // border: '2px solid red',
        height: '30%',
        width: '100%',
        display: 'flex',
        'flex-direction': 'column',
        // alignItems: 'center',
        // padding:'20px',
        justifyContent: 'center'
    },
    secondmain22: {
        // border: '2px solid red',
        height: '10%',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    secondmain23: {
        // border: '2px solid green',
        height: '57%',
        width: '100%',
        padding: '20px'
    }
}
