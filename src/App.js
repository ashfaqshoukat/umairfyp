import React,{useState} from 'react';
import './App.css';
import Name from "./components/Name";
import Leftcont from "./contents/content";

import Testing from "./contents/tables";
import Footer from "./footer/footer";
function App() {
	const [state,setState]=useState('home')
		const clickhomebtn = (event, newState)=>{
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
										<li><a onClick={(event)=>clickhomebtn(event, 'home')}>Home</a></li>
										<li><a onClick={(event)=>clickhomebtn(event, 'store')}>Store</a></li>
										<li><a onClick={(event)=>clickhomebtn(event, 'contact')}>Contact</a></li>
										<li><a onClick={(event)=>clickhomebtn(event, 'help')}>Help</a></li>
									</ul>
								</div>
							</div>
					<div className="clear"></div>
				</div>
			</div>
              <div className="container">
	              {(state === 'home') && (
		              <Leftcont />
	              )}
              </div>
              <div>
	              {(state === 'store') && (
		              <React.Fragment>

			              <Testing/>
		              </React.Fragment>
	              )}
              </div>
	      <div>
	      </div>
	      <div>
		      <Footer/>
	      </div>
      </div>
  );
}

export default App;
