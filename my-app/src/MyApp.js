// React-Router
import React, { Component } from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import ClientListTable from './components/clientsListTable';
import Prize from './components/prize';
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

const Activity = () => (
    <div>
        <h2>Prize</h2>
        <Prize/>
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
                        <Link to={'/Activity'}>Prize</Link>
                    </div>
                    <hr/>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/list' component={List}></Route>
                    {/*<Route path='/activity' component={Activity}></Route>*/}
                    <Route path='/activity' render={() => {
                        console.log('额外逻辑')
                        return <Activity/>
                    }}></Route>
                </div>
            </Router>
        )
    }
}

export default MyApp
