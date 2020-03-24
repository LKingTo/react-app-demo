// React-Router
import React, { Component } from 'react';
import {Provider} from 'react-redux';   // Provider容器组件用于注入store到react应用
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import ClientListTable from './components/clientsListTable';
import Prize from './components/prize';
import StoreDemo1 from './components/storeDemo1';
import StoreDemo2 from './components/storeDemo2';
import './App.css';
import store from './store'

const Home = (props) => (
    <div>
        <h2>Home</h2>
        <div>items: {JSON.stringify(props.items)}</div>
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
            <Provider store={store}> {/*注入store到Provider容器组件*/}
                <Router>
                    <div className="App">
                        <div className='nav' style={{display:'flex',justifyContent:'space-around'}}>
                            <Link to={'/'}>Home</Link>
                            <Link to={'/StoreDemo1'}>StoreDemo1</Link>
                            <Link to={'/StoreDemo2'}>StoreDemo2</Link>
                            <Link to={'/List'}>List</Link>
                            <Link to={'/Activity'}>Prize</Link>
                        </div>
                        <hr/>
                        <Route path='/' exact component={Home}></Route>
                        <Route path='/storeDemo1' exact component={StoreDemo1}></Route>
                        <Route path='/storeDemo2' exact component={StoreDemo2}></Route>
                        <Route path='/list' component={List}></Route>
                        <Route path='/activity' component={Activity}></Route>
                        {/*<Route path='/activity' render={() => {*/}
                        {/*    console.log('额外逻辑')*/}
                        {/*    return <Activity/>*/}
                        {/*}}></Route>*/}
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default MyApp
