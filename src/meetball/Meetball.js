import React, { Component } from 'react';
import './Meetball.css';
import Navigation from '../components/navigation/Navigation';

class Meetball extends Component {
  render() {
    return (
      <div className="main meetball">
        <Navigation />

        <h1>Meetball</h1>
        </div>
    );
  }
}

export default Meetball;