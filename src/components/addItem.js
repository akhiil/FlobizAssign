import React, { useState } from 'react'

const AddItem = (props) => {

    const [itemName, setItemName] = useState('');
    const [itemCode, setItemCode] = useState('');
    const [salesPrice, setSalesPrice] = useState('');
    const [purchasePrice, setPurchasePrice] = useState('');
    const [measuringUnit, setMeasuringUnit] = useState('');
    const [openingDate, setOpeningDate] = useState('');


    const saveItem = () => {
        console.log(itemName, " ", itemCode, " ", salesPrice, " ", purchasePrice, " ", measuringUnit, " ", openingDate)
        const details = { itemName, itemCode, salesPrice, purchasePrice, measuringUnit, openingDate }
        props.addEachItem(details);
        setItemName('');
        setItemCode('');
        setSalesPrice('');
        setPurchasePrice('');
        setMeasuringUnit('');
        setOpeningDate('');
    }

    return (
        <div style={{ border: '1px solid black', height: '100vh' }}>
            <div style={{ border: '1px solid gray', padding: 10 }}>
                <p style={styles.headerText}>Create/Edit Items</p>
            </div>

            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 10px' }}>
                    <div>
                        <p style={styles.normalText}>Item name*</p>
                        <input
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            style={{ padding: '10px 10px', fontSize: 16, borderRadius: 5 }} placeholder='Enter item name' />
                    </div>
                    <div>
                        <p style={styles.normalText}>Item code</p>
                        <input
                            value={itemCode}
                            onChange={(e) => setItemCode(e.target.value)}
                            style={{ padding: '10px 10px', fontSize: 16, borderRadius: 5 }} placeholder='Enter item code' />
                    </div>
                </div>

                <div style={{ backgroundColor: 'lightgray', padding: "10px" }}>
                    <p style={styles.subHeaderText}>Stock & Pricing Details (Optional)</p>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 10px' }}>
                    <div>
                        <p style={styles.normalText}>Sales Price</p>
                        <input
                            value={salesPrice}
                            onChange={(e) => setSalesPrice(e.target.value)}
                            style={{ padding: '10px 10px', fontSize: 16, borderRadius: 5 }} placeholder='Rs 0' />
                    </div>
                    <div>
                        <p style={styles.normalText}>Purchase Price</p>
                        <input
                            value={purchasePrice}
                            onChange={(e) => setPurchasePrice(e.target.value)}
                            style={{ padding: '10px 10px', fontSize: 16, borderRadius: 5 }} placeholder='Rs 0' />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 10px' }}>
                    <div>
                        <p style={styles.normalText}>Measuring UNIT</p>
                        <input
                            value={measuringUnit}
                            onChange={(e) => setMeasuringUnit(e.target.value)}
                            style={{ padding: '10px 10px', fontSize: 16, borderRadius: 5 }} placeholder='Select Unit' />
                    </div>
                    <div>
                        <p style={styles.normalText}>Opening Stock Date</p>
                        <input
                            value={openingDate}
                            onChange={(e) => setOpeningDate(e.target.value)}
                            type={'date'}
                            style={{ padding: '10px 10px', fontSize: 16, borderRadius: 5, }} placeholder='Rs 0' />
                    </div>
                </div>

                <button
                    onClick={saveItem}
                    style={{
                        width: '80%',
                        padding: 10,
                        margin: '0 auto 0 auto',
                        display: 'block',
                        marginTop: 20,
                        backgroundColor: '#1e30d4',
                        borderRadius: 7
                    }}>
                    <p style={{ fontSize: 18, color: 'lightgray' }}>Save</p>
                </button>
            </div>
        </div>
    )
}

const styles = {
    headerText: {
        fontSize: 20,
        fontWeight: '500',
        color: 'gray'
    },
    subHeaderText: {
        fontSize: 18,
        fontWeight: '500',
        color: 'gray'
    },
    normalText: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10
    }
}

export default AddItem
