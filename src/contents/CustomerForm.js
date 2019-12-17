import React from 'react';
import CustomerInput from "../components/CustomerInput";
import PrimaryButton from "../components/PrimaryButton";
import Tables from './tables';
import axios from 'axios'

class CustomerForm extends React.Component {

	state = {
		form: {
			name: '',
			address: '',
			phone: ''
		},
		table:false
	}
	changeHandler = (event) => {
		event.persist();
		this.setState({
			form:{
				[event.target.name] : event.target.value
			}
		})
	}

	render() {
		return (
			<div>
				<div>
					<div className="form1"><br/>
						<CustomerInput label="Customer Name" name="name" placeholde="Customer Name" value={this.state.form.name}
						               onChangeText={this.changeHandler}/>
						<CustomerInput label="Address" name="address" placeholde="Address" value={this.state.form.address}
						               onChangeText={this.changeHandler}/>
						<CustomerInput label="Phone Number" name="phone" placeholde="Phone number" value={this.state.form.phone}
						               onChangeText={this.changeHandler}/>
						<PrimaryButton onPressed={this.submitCustomerData} />
					</div>
				</div>
				{(this.state.table) && (
					<Tables />
				)}

			</div>

		)
	}

	submitCustomerData = (e) => {
		const options = {
			url: "http://localhost:8000/api/customer/create/",
			method:"post",
			data: {
				...this.state.form
			},
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
		};
		console.log(options)
		axios(options).then((response) => {
			console.log(response)
		}).catch((err) => {
			console.log(err.toJSON())
		})
			.then((response) => {
				this.setState({
					table:true
				})
				alert('saved successfully')
			})
			.catch((err) => {
				alert(JSON.stringify(err))
			})



	}


}

export default CustomerForm;
