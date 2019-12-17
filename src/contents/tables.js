import React from 'react';
import Input from '../components/Input'
import CustomerInput from '../components/CustomerInput'
// import axios from 'axios';
class Testing extends React.Component {
	constructor({props}) {
		super(props)
		this.state = {
			srnbr: 1,
			section: '',
			size: '',
			quantity: '',
			color: '',
			thickness: '',
			price: '',
			totalamount: '',
			customername: '',
			address: '',
			phonenbr: ''
		}
	}
	calculateAmount(value) {
		var totalamout = this.state.size * this.state.quantity * value;
		this.setState({price: value})
		this.setState({totalamount: totalamout})

	}
	submitData() {
		// const user = {
		// 	name: this.state.name
		// };
		//
		// axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
		// 	.then(res => {
		// 		console.log(res);
		// 		console.log(res.data);
		// 	})
	}
	render() {

		return (
			<div>
				<div className="tables-main">
					<div>
						<h2>Invoice For Customer</h2>
					</div>
				
					<div className="form2">
						<form className="store_invoice">

							<Input placeholde="Sr No" value={this.state.srnbr}
							       onChangeText={value => this.setState({srnbr: value})}/>
							<Input placeholde="Section" value={this.state.section}
							       onChangeText={value => this.setState({section: value})}/>
							<Input placeholde="size" value={this.state.size}
							       onChangeText={value => this.setState({size: value})}/>
							<Input placeholde="Quantity" value={this.state.quantity}
							       onChangeText={value => this.setState({quantity: value})}/>
							<Input placeholde="color" value={this.state.color}
							       onChangeText={value => this.setState({color: value})}/>
							<Input placeholde="thickness" value={this.state.thickness}
							       onChangeText={value => this.setState({thickness: value})}/>
							<Input placeholde="price" value={this.state.price}
							       onChangeText={value => this.calculateAmount(value)}/>
							<Input placeholde="total amount" value={this.state.totalamount}/> <br/> <br/>
							<a onClick={() => this.submitData()}>Submit</a>

						</form>

					</div>
				</div>
			</div>
		)

	}
}
export default Testing;
