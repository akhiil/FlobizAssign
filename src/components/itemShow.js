import React, { useState } from 'react'
import EmptyIcon from '../assets/icn_Inventory Reports.svg'

const ItemDisplay = (props) => {
    return (
        <div>
            {props.items.map((item) => {
                return (
                    <div style={{
                        display: 'flex',
                        border: '1px solid gray',
                        justifyContent: 'space-around',
                        padding: '10px 0',
                    }}>
                        <p style={styles.textStyle}>{item.itemName}</p>
                        <p style={styles.textStyle}>{item.itemCode}</p>
                        <p style={styles.textStyle}>{item.sellingPrice}</p>
                        <p style={styles.textStyle}>{item.purchasePrice}</p>
                        <p style={styles.textStyle}>{item.unit}</p>
                        <p style={styles.textStyle}>{item.date}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default function itemShow(props) {

    const items = props.userItem;

    return (
        <div style={{ border: '1px solid black', height: '100%' }}>
            <div style={{ border: '1px solid black', padding: '10px' }}>
                <p style={styles.headerText}>Items</p>
            </div>

            <div style={{ padding: '10px', height: '100%' }}>
                <input style={{ padding: '10px 10px', fontSize: 16, borderRadius: 5 }} placeholder='Search Items' />
                <div style={{
                    display: 'flex',
                    border: '1px solid gray',
                    margin: '10px 0',
                    justifyContent: 'space-around',
                    padding: '10px 0',
                    backgroundColor: 'lightgray'
                }}>
                    <p style={styles.textStyle}>ITEM NAME</p>
                    <p style={styles.textStyle}>ITEM CODE</p>
                    <p style={styles.textStyle}>SELLING PRICE</p>
                    <p style={styles.textStyle}>PURCHADSE PRICE</p>
                    <p style={styles.textStyle}>UNIT</p>
                    <p style={styles.textStyle}>DATE</p>
                </div>

                {items.length === 0 ? <div style={{ marginTop: '25%', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <img src={EmptyIcon} style={{ width: 200, height: 'auto' }} />
                        <p style={{ color: 'gray', marginTop: 10 }}>You do not have any items to display</p>
                    </div>
                </div> : <ItemDisplay items={items} />}
            </div>
        </div>
    )
}

const styles = {
    textStyle: {
        fontSize: 14,
        width: '17%',
        marginLeft:20
    },
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'gray'
    }
}
