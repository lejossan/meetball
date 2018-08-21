import React, { Component } from 'react';
import './Create.css';
import Navigation from '../components/navigation/Navigation';

class Create extends Component {
  render() {
    return (
      <div className="main create">
        <Navigation />
        <div class="inner">
          <h1>Create your meetball</h1>
        </div>
      </div>
    );
  }
}

export default Create;