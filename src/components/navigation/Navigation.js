import React, { Component } from 'react';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div className="navigation inner">
        <ul class="horizontal fullwidth">
          <li><a href="/" class="icon icon-home" /></li>
          <li><a href="Create" class="btn btn__darkblue btn__small">Create meetball</a></li>
          <li><a href="about" class="btn btn__darkblue btn__small">About us</a></li>
          <li><span class="icon icon-hint" /></li>
        </ul>
      </div>
    );
  }
}

export default Navigation;