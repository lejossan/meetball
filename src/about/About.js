import React, { Component } from 'react';
import './About.css';
import logo from '../images/logo.svg';
import Navigation from '../components/navigation/Navigation';

class About extends Component {
  render() {
    return (
      <div className="main about">
        <Navigation />
        <div class="inner">
          <img src={logo} className="logo" alt="logo" />
          <p className="font__thin font__big">
            We love to meet
          </p>
          <p className="font__thin font__big">
            We hate logins
          </p>
          <p className="font__thin font__big">
            We love privacy
          </p>
          <p className="font__thin font__big">
            We hate to share our data
          </p>
          <p className="font__thin font__big">
            We love meetballs
          </p>
          <p className="quote">
            Ok, enough is enough. We don’t want to know who you are so this was as much you will know about us.
          </p>
          <div class="fullwidth"><a href="create" class="btn btn__yellow cta">Go create a meetball!</a></div>

        </div>
        </div>
    );
  }
}

export default About;