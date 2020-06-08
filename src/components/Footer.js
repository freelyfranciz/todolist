import React, { Component } from 'react';

class Footer extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState((prevState) => {
            return{
                count: prevState.count+1
            }
        });    
    }
    render() {
        return (
            <footer>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change</button>
            </footer>
        );
    }
}

export default Footer;