import React, {useState} from 'react';
import ItemShow from '../components/itemShow';
import AddItem from '../components/addItem';

const App = () => {
    const styles = {
        textStyle: {
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', border: '1px solid #636363' }}>
                <p style={styles.textStyle}>8210706721</p>
                <p style={styles.textStyle}>Logout</p>
            </div>
            <div style={{display:'flex'}}>
                <div style={{width:'50%'}}><ItemShow /></div>
                <div style={{width:'50%'}}><AddItem /></div>
            </div>
        </div>
    )
}
export default App;