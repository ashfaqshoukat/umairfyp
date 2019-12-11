import React from 'react';
import CustomerInput from "../components/CustomerInput";
import PrimaryButton from "../components/PrimaryButton";
import axios from 'axios'

class CustomerForm extends React.Component {

	constructor({props}) {
		super(props)
		this.state = {
			customername: '',
			address: '',
			phonenbr: ''
		}
	}

	render() {
		return (
			<div>
				<div>
					<div className="form1"><br/>
						<CustomerInput label="Customer Name" placeholde="Customer Name" value={this.state.customername}
						               onChangeText={value => this.setState({customername: value})}/>
						<CustomerInput label="Address" placeholde="Address" value={this.state.address}
						               onChangeText={value => this.setState({address: value})}/>
						<CustomerInput label="Phone Number" placeholde="Phone number" value={this.state.phonenbr}
						               onChangeText={value => this.setState({phonenbr: value})}/>
						<PrimaryButton onPressed={() => {
							this.submitCustomerData()
						}}/>
					</div>
				</div>

			</div>

		)
	}

	submitCustomerData() {
		const {
			customername,
			address,
			phonenbr
		} = this.state
		var config = {
			headers: {

				'Access-Control-Allow-Origin': '*'//siteA.com
			}
		}

		// axios.post('http://192.168.1.10:8000/api/customer/create/', {
		// 	"name": customername,
		// 	"address": address,
		// 	"phone": phonenbr
		// }, config)
		// 	.then(function (response) {
		// 		alert('saved successfully')
		// 	})
		// 	.catch(function (err) {
		// 		alert(JSON.stringify(err))
		// 	})

		axios.get("api/customer/").then(function (response) {
			alert(JSON.stringify(response))
		})
			.catch(function (err) {
				alert(JSON.stringify(err))
			})

	}


}

export default CustomerForm;