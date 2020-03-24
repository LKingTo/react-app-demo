import React from 'react';
import {connect} from 'react-redux';

class StoreDemo1 extends React.Component {
    render() {
        return (
            <div>
                <h2>StoreDemo1</h2>
                {/*<div>props: {JSON.stringify(this.props)}</div>*/}
                <div>users: {JSON.stringify(this.props.users)}</div>
                <br/>
                <div>items: {JSON.stringify(this.props.items)}</div>
            </div>
        )
    }
}

/**
 * connect()，把 store 注入到组件的 props 中
 * connect 方法的第一个参数是一个函数
 该函数的第一个参数就是 store 中的 state : store.getState()
 该函数的返回值将被解构赋值给 props : this.props.items
 */

export default connect(state => state)(StoreDemo1);
