import React from 'react';
import CustomerItem from "../components/CustomerItem";

class CustomerList extends React.Component {
    customerList = [
        {'customername': 'Ashfaq', 'address': "lahore pakistan", 'phonenbr': "54354"},
        {'customername': 'Ashfaq', 'address': "lahore pakistan", 'phonenbr': "54354"},
    ]

    render() {
        return(
            <div>
                { this.renderCustomerList()}
            </div>
        )

    }


    renderCustomerList() {
        const listItems = this.customerList.map(({customername,address,phonenbr},index) =>
            <CustomerItem onPressed={(indexs)=>{this.itemClicked(indexs)}}  indexs={index} address={customername} customername={address} phonenbr={phonenbr}/>
        )
        return listItems;
    }

    itemClicked(index){
        alert(index)
    }
}

export default CustomerList;