import React from 'react';
import CustomerItem from "../components/CustomerItem";
import axios from 'axios'
class CustomerList extends React.Component {


    constructor(props) {
        super(props);
        this.state={
            customerList:[]
        }

    }

    componentDidMount() {
        this.getCustomerList()
    }

    render() {
        return(
            <div>
                { this.renderCustomerList()}
            </div>
        )

    }

    getCustomerList() {
        axios.get("http://localhost:8000/api/customer/").then(function (response) {
            this.setState({customerList:response.data})


        })
        	.catch(function (err) {
        		alert(JSON.stringify(err))
        	})
    }


    renderCustomerList() {
        var listItems = this.state.customerList.map(({name,address,phone},index) =>
            <CustomerItem onPressed={(indexs)=>{this.itemClicked(indexs)}}  indexs={index} address={address} customername={name} phonenbr={phone}/>
        )
        return listItems;
    }

    itemClicked(index){
        alert(index)
    }
}

export default CustomerList;
