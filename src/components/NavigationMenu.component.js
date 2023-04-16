import React, { Component } from 'react';

class NavigationMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false
    };
  }

  render() {
    const { openMenu } = this.state;

    return (
      <>
        <div className={`hamburger-menu__wrapper`} onClick={() => {this.setState({openMenu: !openMenu})}}>
          <span className={ openMenu ? "hamburger-menu__overlay hamburger-menu__overlay--active" : "hamburger-menu__overlay"} />
          <div className={ openMenu ? "hamburger-menu hamburger-menu--active" : "hamburger-menu"}>
            <span className="hamburger-menu__line"></span>
            <span className="hamburger-menu__line"></span>
            <span className="hamburger-menu__line"></span>
          </div>
        </div>
        <div className="header-logo__wrapper">
          <a className="header-logo" href="/">
            SH
          </a>
        </div>
        {openMenu ? <nav className="navigation-menu">
          <a href="/" className='navigation-menu__link'>Home</a>
          <a href="/about" className='navigation-menu__link'>About</a>
          <div className='navigation-menu__icon-list'>
            <a href="https://www.linkedin.com/in/steven-harjapramana/" target="_blank" rel="noreferrer"><i className={`fa-brands fa-linkedin`}/></a>
            <a href="mailto:stevenharja@gmail.com"><i className="fa-regular fa-envelope"/></a>
          </div>
        </nav> : <></>}
      </>
    );
  }
}
  
export default NavigationMenu;
  