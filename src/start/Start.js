import React, { Component } from 'react';
import logo from '../images/logo.svg';
import './Start.css';
import Navigation from '../components/navigation/Navigation';

class Start extends Component {
  render() {
    return (
      <div className="main">
        <Navigation />
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <h1 className="">Invite your friends</h1>
          <ul class="icons horizontal">
            <li><span class="icon icon-wine__yellow" ></span></li>
            <li><span class="icon icon-cocktail__yellow" ></span></li>
            <li><span class="icon icon-juice__yellow" ></span></li>
            <li><span class="icon icon-beer__yellow" ></span></li>
            <li><span class="icon icon-coffe_tea__yellow" ></span></li>
            <li><span class="icon icon-cupcake__yellow" ></span></li>
            <li><span class="icon icon-candle__yellow" ></span></li>
            <li><span class="icon icon-gift__yellow" ></span></li>
            <li><span class="icon icon-cake__yellow" ></span></li>
          </ul>
          <div class="line__yellow" />
        </header>
        <div class="inner">
          <p className="font__thin font__big">
            Without login
          </p>
          <p className="quote">
            We don’t want to know who you are or what you do here.
          </p>
          <p className="font__light info">
            We save as little data as possible, just a little cookie in your browser you are using right now. The cookie will connect the browser to your Meetballs. This way we can also skip saving a bunch of stuff about you or your friends at our servers.
          </p>
          <p className="font__bold">
            Check out the little <span class="icon icon-hint" ></span>in the top, it will always tell you exactly what we know about you.
          </p>
        </div>
        <div class="fullwidth"><a href="create" class="btn btn__yellow cta">Invite friends with your first meetball here!</a></div>

        <div class="section section__grey section__list">
          <h4>Meetballs you own</h4>
          <ul class="list">
            <li>
              <a href="#">
                <div class="date">
                  <span class="day">13</span>
                  <span class="wrapper">
                    <span class="month">maj</span>
                    <span class="year">2018</span>
                  </span>
                </div>
                <h3 class="title">Vårmarknad i Verkligheten</h3>
              </a>
            </li>
          </ul>
          <h4>Meetballs you are invited to</h4>
          <ul class="list">
            <li>
              <a href="#">
                <div class="date">
                  <span class="day">13</span>
                  <span class="wrapper">
                    <span class="month">maj</span>
                    <span class="year">2018</span>
                  </span>
                </div>
                <h3 class="title">Vårmarknad i Verkligheten</h3>
              </a>
            </li>
            <li>
              <a href="#">
                <div class="date">
                  <span class="day">13</span>
                  <span class="wrapper">
                    <span class="month">maj</span>
                    <span class="year">2018</span>
                  </span>
                </div>
                <h3 class="title">Vårmarknad i Verkligheten</h3>
              </a>
            </li>
          </ul>

        </div>
      </div>
    );
  }
}

export default Start;
