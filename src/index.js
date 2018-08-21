import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './start/Start';
import Create from './create/Create';
import Meetball from './meetball/Meetball';
import About from './about/About';
import registerServiceWorker from './registerServiceWorker';
import "typeface-roboto";
import icons from './images/icons.svg';
import {BrowserRouter, Route} from 'react-router-dom';
import {Helmet} from 'react-helmet';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Helmet>
            <title>Meetball</title>
          </Helmet>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <Start />
            </div>
          )}/>
          <Route exact={true} path='/create' render={() => (
            <div className="App">
              <Create />
            </div>
          )}/>
          <Route exact={true} path='/meetball' render={() => (
            <div className="App">
              <Meetball />
            </div>
          )}/>
          <Route exact={true} path='/about' render={() => (
            <div className="App">
              <About />
            </div>
          )}/>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();