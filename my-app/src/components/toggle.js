import React from 'react'

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: false};

        // 这边绑定是必要的，这样 `this` 才能在回调函数中使用
        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick() {
    //     // 写法一
    //     // this.setState({
    //     //     isToggleOn : !this.state.isToggleOn
    //     // })
    //     // 写法二
    //     this.setState(prevState => ({
    //         isToggleOn: !prevState.isToggleOn
    //     }))
    // }

    // 箭头函数确保了 `this` 绑定在  handleClick 中，不用'bind'
    handleClick = () => {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    };

    render() {
        return (
            <button style={{color:'yellow'}} onClick={this.handleClick}>click事件：{this.state.isToggleOn?'ON':'OFF'}</button>
        )
    }
}

export default Toggle
