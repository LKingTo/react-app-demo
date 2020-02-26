/** State、Props **/
// 父组件中设置state, 使用props将其传递到子组件
import React from 'react'

class WebSite extends React.Component {
    constructor() {
        super();
        this.state = {
            name: "百度",
            site: "https://www.baidu.com"
        }
    }
    render() {
        return (
            <div>
                <Name name={this.state.name} />
                <Link site={this.state.site} />
            </div>
        )
    }
}

class Name extends React.Component {
    render() {
        return (
            <h5 style={{margin:'0'}}>{this.props.name}</h5>
        )
    }
}

class Link extends React.Component {
    render() {
        return (
            <a
                style={{color:'yellow'}}
                href={this.props.site}
                target='_blank'
                rel="noopener noreferrer"
            >{this.props.site}</a>
        )
    }
}

export default WebSite
