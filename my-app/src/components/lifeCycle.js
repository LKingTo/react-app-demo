import React from 'react'

class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: 0};
        this.setNewNumber = this.setNewNumber.bind(this);
    }

    setNewNumber() {
        this.setState({data: this.state.data + 1})
    }
    render() {
        return (
            <div>
                <button onClick = {this.setNewNumber}>INCREMENT</button>
                <Content myNumber = {this.state.data}></Content>
            </div>
        );
    }
}

class Content extends React.Component {
    componentWillMount() {
        console.log('[componentWillMount] Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('[componentDidMount] Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps) {
        console.log('[componentWillReceiveProps] Component WILL RECEIVE PROPS!')
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('[componentWillUpdate] Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('[componentDidUpdate] Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('[componentWillUnmount] Component WILL UNMOUNT!')
    }

    render() {
        console.log('[render]')
        return (
            <div>
                <h3>{this.props.myNumber}</h3>
            </div>
        );
    }
}

export default Button
