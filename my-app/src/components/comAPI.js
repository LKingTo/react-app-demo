import React from 'react'
import ReactDOM from 'react-dom'

/**
 * 组件API
 * 设置状态：setState(object nextState[, function callback])
 * 强制更新：forceUpdate([function callback])
 * 获取DOM节点：ReactDOM.findDOMNode()
 */
class SetState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0};   // state初始化只能在构造函数里进行
    }
    handleClick() {
        this.setState((preState, props) => {
            return {number: preState.number + 1}
        }, () => {  // setState设置成功，且组件重新渲染后调用
            console.log('setState callback');
        })
    }
    handleUpdate() {
        // 强制更新
        this.forceUpdate(() => {
            console.log('forceUpdate callback')
        })
    }
    getDOMNode() {
        console.log('findDOMNode:', ReactDOM.findDOMNode(this))
    }
    render() {
        return (
            <div>
                <div onClick={this.handleClick.bind(this)}>setState：{this.state.number}</div>
                <div onClick={this.handleUpdate.bind(this)}>forceUpdate</div>
                <div onClick={this.getDOMNode.bind(this)}>findDOMNode</div>
            </div>
        )
    }
}

/*class ReplaceState extends React.Component {
    constructor(props) {
        super(props);
        this.state = {number: 0, str: 'state'};
    }
    handleClick() {
        // replaceState与setState区别：不保留nextState中未有的原状态
        // [error:] this.replaceState is not a function  -- [2020-02-05]
        this.replaceState((preState, props) => {
            return {str: 'replace'}
        }, () => {
            console.log('replaceState callback');
        })
    }
    render() {
        return (
            <div onClick={this.handleClick.bind(this)}>replaceState：{this.state.number} | {this.state.str}</div>
        )
    }
}
 */

function ComAPIController() {
    return (
        <div>
            <SetState/>
            {/*<ReplaceState/>*/}
        </div>
    )
}

export default ComAPIController
