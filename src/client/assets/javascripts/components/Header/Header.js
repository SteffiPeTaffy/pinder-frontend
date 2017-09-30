import React, { Component } from 'react';
import logo from '../../../images/pinder_logo_white.svg';
import './header.scss';

export default class Header extends Component {
  render() {
    return (
        <div className='header-container'>
          <div className='header content'>
            <img className='logo' src={logo}/>
            <p>pinder</p>
          </div>
        </div>
    );
  }
}
