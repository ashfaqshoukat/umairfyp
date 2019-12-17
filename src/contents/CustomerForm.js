import React from 'react';
import CustomerInput from "../components/CustomerInput";
import PrimaryButton from "../components/PrimaryButton";
import Tables from './tables';
import axios from 'axios'

class CustomerForm extends React.Component {

    constructor(props) {
        super(props);
       this.state = {
            name: '',
            address: '',
            phone: '',

            table: false
        }
    }


	changeHandler = (event) => {
		event.persist();
		this.setState({

				[event.target.name]: event.target.value

		})
	}

	render() {
		return (
			<div>
				<div>
					<div className="form1"><br/>
						<CustomerInput label="Customer Name" name="name" placeholde="Customer Name"
						               value={this.state.name}
									   onChangeText={this.changeHandler}/>
						<CustomerInput label="Address" name="address" placeholde="Address"
						               value={this.state.address}
									   onChangeText={this.changeHandler}/>
						<CustomerInput label="Phone Number" name="phone" placeholde="Phone number"
						               value={this.state.phone}
									   onChangeText={this.changeHandler}/>
						<PrimaryButton onPressed={this.submitCustomerData}/>
					</div>
				</div>
				{(this.state.table) && (
					<Tables/>
				)}

			</div>

		)
	}

	submitCustomerData = (e) => {

		const options = {
			url: "http://localhost:8000/api/customer/create/",
			method: "post",
			data: {
				name:this.state.name,
                address: this.state.address,
                phone: this.state.phone
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
					table: true
				})
				alert('saved successfully')
			})
			.catch((err) => {
				alert(JSON.stringify(err))
			})


	}


}

export default CustomerForm;
