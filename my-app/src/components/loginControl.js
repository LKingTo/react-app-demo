import React from "react";

/*** 条件渲染 ***/
function UserGreeting(props) {
    return <div>欢迎回来!</div>;
}

function GuestGreeting(props) {
    return <div>请先注册。</div>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }


    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button = null;
        if (isLoggedIn) {
            button = <button style={{color:'yellow'}} onClick={this.handleLogoutClick}>退出</button>
        } else {
            button = <button style={{color:'yellow'}} onClick={this.handleLoginClick}>登录</button>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }
}

export default LoginControl
