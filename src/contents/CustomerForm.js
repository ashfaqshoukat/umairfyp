import React from 'react';
import CustomerInput from "../components/CustomerInput";
import PrimaryButton from "../components/PrimaryButton";
class CustomerForm  extends React.Component{

    constructor({props}) {
        super(props)
        this.state = {
            customername: '',
            address: '',
            phonenbr: ''
        }
    }

    render() {
        return(
            <div>
                <div>
                <form className="form1"><br/>
                    <CustomerInput label="Customer Name" placeholde="Customer Name" value={this.state.customername}
                                   onChangeText={value => this.setState({customername: value})}/>
                    <CustomerInput label="Address" placeholde="Address" value={this.state.address}
                                   onChangeText={value => this.setState({address: value})}/>
                    <CustomerInput label="Phone Number" placeholde="Phone number" value={this.state.phonenbr}
                                   onChangeText={value => this.setState({phonenbr: value})}/>
                                   <PrimaryButton onPressed={()=>{this.submitCustomerData()}}/>
                </form>
                </div>

            </div>

        )
    }

    submitCustomerData(){
        alert('clicked me')
    }
}
export default CustomerForm;