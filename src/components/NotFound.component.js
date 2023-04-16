import React, { Component } from 'react';

class NotFound extends Component {
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
                <div className="hero">
                <div className="hero__content">
                    <h1 className="text-center hero__heading h3">Hi there! It seems you reached a 404 error.</h1>
                    <h2 className="text-center hero__subheading h1">To go back please click <a href='/' className="blink-underline">here!</a></h2>
                </div>
                </div>
            </>
        );
    }
  }
  
export default NotFound;
  