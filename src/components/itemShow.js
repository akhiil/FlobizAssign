import React from 'react'

export default function itemShow() {
    const styles = {
        textStyle:{
            fontSize:12,
        }
    }
    return (
        <div style={{border:'1px solid black', height:'100vh'}}>
            <div style={{border:'1px solid black', padding:'10px'}}>
                <p>Items</p>
            </div>

            <div style={{padding:'10px'}}>
            <input style={{fontSize:12, padding:'5px 10px'}} placeholder='Search items'/>
            <div style={{display:'flex', border:'1px solid black', margin:'5px', justifyContent:'space-around'}}>
                <p style={styles.textStyle}>ITEM NAME</p>
                <p style={styles.textStyle}>ITEM CODE</p>
                <p style={styles.textStyle}>SELLING PRICE</p>
                <p style={styles.textStyle}>PURCHADSE PRICE</p>
                <p style={styles.textStyle}>UNIT</p>
                <p style={styles.textStyle}>DATE</p>
            </div>
            </div>
        </div>
    )
}
