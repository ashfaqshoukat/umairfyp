import React from 'react';

const CustomerItem = ({indexs,customername, phonenbr, address,onPressed}) => {
    return (
        <div onClick={(indexs)=>onPressed(indexs)} style={styles}>
            <p>{customername}</p>
            <p>{phonenbr}</p>
            <p>{address}</p>
        </div>
    )
}

const styles = {
    "display": "block",
    'width': '20%',
    'float': 'left'
}
export default CustomerItem;