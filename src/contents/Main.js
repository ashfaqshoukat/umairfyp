import React, {useState} from 'react';
import '../App.css';
import Leftcont from './content';
import Testing from './content';
import Footer from "../footer/footer";
import StoreDashboard from "./StoreDashboard";
import Contactus from "../components/navbar/contactus";

function Main() {
	const [state, setState] = useState('home')
	const clickhomebtn = (event, newState) => {
		setState(newState)
	}
	return (
		<div>
			<div className="mainheader">
				<div className="container">
					<div className="lefth">
						<h2>Madina Aluminium Store</h2>
					</div>
					<div className="righth">
						<div className="nav_bar">
							<ul>
								<li><a onClick={(event) => clickhomebtn(event, 'home')}>Home</a></li>
								<li><a onClick={(event) => clickhomebtn(event, 'store')}>Store</a></li>
								<li><a onClick={(event) => clickhomebtn(event, 'contact')}>Contact</a></li>
								<li><a onClick={(event) => clickhomebtn(event, 'help')}>Help</a></li>
							</ul>
						</div>
					</div>
					<div className="clear"></div>
				</div>
			</div>
			<div className="container">
				{(state === 'home') && (
					<Leftcont/>
				)}
			</div>
			<div>
				{(state === 'store') && (
					<React.Fragment>

						<StoreDashboard/>
					</React.Fragment>
				)}
			</div>
			<div>
				{(state === 'contact') && (
					<Contactus/>
				)}
			</div>
			<div>
				<Footer/>
			</div>
		</div>
	);
}

export default Main;
