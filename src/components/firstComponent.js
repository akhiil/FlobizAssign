import React from 'react'
import MoneyBackIcon from '../assets/icn_moneyback.svg'

export default function firstComponent() {
    const firstdiv = {
        mainCont: {
            height: '250px',
            width: '100%'
        },
        UpperCont:{
            height:'60%',
            display:'flex',
            justifyContent: 'space-between',

        },
        uppercontSmall:{
            height:'100%',
            width:'25%',
            display:'flex',
            'flex-direction' :'column',
            justifyContent:'center',
            alignItems:'center',
        },
        DownCont:{
            height:'40%',
            display:'flex',
            'flex-direction' :'row',
            justifyContent:'space-between',
            alignItems:'center',
        },
        DownContLeft:{
            width:'50%',
            'margin-left':'150px'
        },
        DownContRight:{
            'margin-right':'50px'
        }

    }
    return (
       
            <div style={firstdiv.mainCont} >
             
                <div style={{...firstdiv.UpperCont, alignItems:'center'}}>
                    <div style={firstdiv.uppercontSmall}> 
                        <h1 style={{color:'#db631a'}}>1,00,000+</h1>
                        <h4>Businesses Trust us</h4>
                    </div>
                    <div style={firstdiv.uppercontSmall}> 
                        <h1 style={{color:'#db631a'}}>30,00,000+</h1>
                        <h4>Invoices</h4>
                    </div>
                    <div style={firstdiv.uppercontSmall}> 
                        <h1 style={{color:'#db631a'}}>5,000+</h1>
                        <h4>Client & Towns in India</h4>
                    </div>
                    <div style={firstdiv.uppercontSmall}> 
                        <h1 style={{color:'#db631a'}}>4.5<i class="fa-solid fa-star"></i></h1>
                        <h4>Rating on Google Play</h4>
                    </div>

                </div>
                <div style={firstdiv.DownCont}>
                   <div style={firstdiv.DownContLeft}>
                        <h1>Now try all benefits of My Billbook app</h1>
                        <h3 style={{color:'#db631a'}}>Free for 14 days</h3>
                   </div>
                   <div style={firstdiv.DownContRight}>
                            <img src={MoneyBackIcon} alt="React Logo" style={{height:'70px'}}/>
                   </div>
                </div>

            </div>        
     
    )
}
