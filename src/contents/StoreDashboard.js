import  React from 'react';
import CustomerForm from "./CustomerForm";
import CustomerList from "./CustomerList";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import styles from '../App.css'
class StoreDashboard extends React.Component{
    render() {
        return(
            <Router>
            <div className="storedashboar_style">
                <button className={styles.btn}><Link to={'/customerform'} className="nav-link"> Add New Customer </Link></button>
                <button><Link to={'/customerList'} className="nav-link"> View All Customer</Link></button>


                <Switch>
                    <Route path='/customerform' component={CustomerForm} />
                    <Route path='/customerList' component={CustomerList} />
                </Switch>
            </div>
                <div className="clear"/>


            </Router>
        )
    }




}

export  default StoreDashboard;
