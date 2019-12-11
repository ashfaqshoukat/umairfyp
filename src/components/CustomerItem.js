import React from 'react';

const CustomerItem = ({indexs,customername, phonenbr, address,onPressed}) => {
    return (
<div>
        <div className="customeritem_main" onClick={(indexs)=>onPressed(indexs)} >
            <p>{customername}</p>
            <p>{phonenbr}</p>
            <p>{address}</p>
        </div>
    <div className="clear">

    </div>
</div>

    )
}

export default CustomerItem;