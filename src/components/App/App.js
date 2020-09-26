import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactDOM from 'react-dom';
//import Button from '@material-ui/core/Button';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';


import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <main>
            <Route path="/#/" exact>
              <App />
            </Route>

            <Route path="/feeling">
              <Feeling />
            </Route>

            <Route path="/understanding">
              <Understanding />
            </Route>

            <Route path="/support">
              <Support />
            </Route>

            <Route path="/comment">
              <Comment />
            </Route>

            <Route path="/review">
              <Review />
            </Route>
          </main>
        </div>
      </Router>
    );
  }
}
export default App;
