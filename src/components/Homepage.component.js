import React, { Component } from 'react';

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeButton: props.homeButton
        };
    }
    
    render() {
        return (
            <>
                {this.state.homeButton ? this.state.homeButton : <></>}
                <div className="circle-loop">
                    <a className="circle-loop__outer circle-loop__outer--initial" href="/about"></a>
                    <div className="circle-loop__inner circle-loop__inner--initial"></div>
                    <div className="circle-loop__inner circle-loop__inner--alt circle-loop__inner--initial-alt"></div>
                </div>
                <div className="hero">
                <div className="hero__content">
                    <h1 className="text-center hero__heading h3">Steven Harjapramana</h1>
                    <h2 className="text-center hero__subheading hero__subheading--animated h1">Full-Stack Developer</h2>
                </div>
                </div>
            </>
        );
    }
  }
  
export default Homepage;
  