import React, { Component } from 'react';

class Footer extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: "false"
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((prevState) => {
            return { isLoggedIn: !prevState.isLoggedIn }
        });
    }

    render() {
        return (
            <footer>
                <p>{this.state.isLoggedIn ? "You are logged in" : "You are logged out"}</p>
                <button onClick={this.handleClick}>{this.state.isLoggedIn ? "log in" : "log out"}</button>
            </footer>
        );
    }
}

export default Footer;