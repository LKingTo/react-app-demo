// React-Router
import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import ClientListTable from './components/clientsListTable';
import './App.css';

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
);

const List = () => (
    <div>
        <h2>名单</h2>
        <ClientListTable/>
    </div>
);

const Product = () => (
    <div>
        <h2>Product</h2>
    </div>
);

class MyApp extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className='nav' style={{display:'flex',justifyContent:'space-around'}}>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/List'}>List</Link>
                        <Link to={'/Product'}>Product</Link>
                    </div>
                    <hr/>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/list' component={List}></Route>
                    {/*<Route path='/product' component={Product}></Route>*/}
                    <Route path='/product' render={() => {
                        console.log('额外逻辑')
                        return <Product/>
                    }}></Route>
                </div>
            </Router>
        )
    }
}

export default MyApp
