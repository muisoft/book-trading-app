import React, { Component } from 'react';
import { Login } from '../account';
import logo from '../../logo.svg';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home-header">
          <img src={logo} className="home-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}
