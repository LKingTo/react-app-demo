import React from 'react'

class Popper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Tommy'
        };
    }

    // 事件传参
    preventPop(name, e) {
        e.preventDefault();
        alert(name);
    }

    render() {
        return (
            <a
                style={{color: 'yellow'}}
                href='https://www.baidu.com'
                /*参数*/
                onClick={this.preventPop.bind(this, this.state.name)}
            >Click</a>
        )
    }
}

export default Popper
