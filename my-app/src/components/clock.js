import React from 'react'

function FormattedDate(props) {
    return <h4>现在是 {props.date.toLocaleTimeString()}.</h4>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()}     // 初始化组件状态
    }

    // 挂载到DOM后
    componentDidMount() {
        console.log('state:', this.state)
        console.log('props:', this.props)
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    // 移除出DOM
    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        // setState() 设置状态
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <FormattedDate date={this.state.date}></FormattedDate>
            </div>
        );
    }
}

// 直接导出扩展的类组件
export default Clock;
