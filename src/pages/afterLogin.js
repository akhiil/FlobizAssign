import React, { useState, useEffect } from 'react';
import ItemShow from '../components/itemShow';
import AddItem from '../components/addItem';
import { useLocation, useHistory } from 'react-router-dom';

const App = (props) => {
    const [allItems, setAllItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);

    useEffect(() => {

        const savedUserData = localStorage.getItem(phoneNumber.phone);
        if (savedUserData) {
            const tempItems = JSON.parse(savedUserData)
            tempItems.sort((a, b) => {
                let fa = a.itemName.toLowerCase(),
                    fb = b.itemName.toLowerCase();

                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
            setAllItems(tempItems)
            setFilteredItems(tempItems)
        }
        // console.log(savedUserData)
    }, [])

    const location = useLocation();
    const history = useHistory();
    const phoneNumber = JSON.parse(localStorage.getItem(location.state.id))



    const addEachItem = ({ itemName, itemCode, salesPrice, purchasePrice, measuringUnit, openingDate }) => {
        const tempItem = [...allItems, { itemName, itemCode, sellingPrice: salesPrice, purchasePrice, unit: measuringUnit, date: openingDate }];
        setAllItems(tempItem);
        localStorage.setItem(phoneNumber.phone, JSON.stringify(tempItem));
        // console.log("button pressed", item)
    }

    const filterFunction = (text) => {
        const tempFilter = []
        allItems.filter((value) => {
            if (value.itemName.includes(text)) {
                tempFilter.push(value)
            }
        })
        tempFilter.sort((a, b) => {
            let fa = a.itemName.toLowerCase(),
                fb = b.itemName.toLowerCase();

            if (fa < fb) {
                return -1;
            }
            if (fa > fb) {
                return 1;
            }
            return 0;
        });
        setFilteredItems(tempFilter)
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '15px', border: '1px solid #636363' }}>
                <p style={styles.textStyle}>{phoneNumber.phone}</p>
                <p onClick={() => history.push('/')} style={{ ...styles.textStyle, cursor: 'pointer' }}>Logout</p>
            </div>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '65%' }}><ItemShow
                    userFilteredItem={filteredItems}
                    applyFilter={(text) => filterFunction(text)}
                    userItem={allItems} /></div>
                <div style={{ width: '35%' }}><AddItem addEachItem={(item) => addEachItem(item)} /></div>
            </div>
        </div>
    )
}

const styles = {
    textStyle: {
        fontSize: 18,
        fontWeight: 'bold',
    }
}
export default App;


// {
//     itemName: 'xyz name',
//     itemCode: 'bk12345',
//     sellingPrice: 'Rs 1500',
//     purchasePrice: 'Rs 1200',
//     unit: 'PCS',
//     date: '12/07/21'
// }, {
//     itemName: 'abc sys',
//     itemCode: 'bk12145',
//     sellingPrice: 'Rs 1500',
//     purchasePrice: 'Rs 1200',
//     unit: 'PCS',
//     date: '12/07/21'
// }, {
//     itemName: 'Akhil thomson',
//     itemCode: 'bk12345',
//     sellingPrice: 'Rs 1500',
//     purchasePrice: 'Rs 1200',
//     unit: 'PCS',
//     date: '12/07/21'
// }