import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import ReactDOM from 'react-dom';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';

//importing all the other components!
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comment from '../Comment/Comment';
import Review from '../Review/Review';
import Home from '../Home/Home';
import { Toolbar } from '@material-ui/core';

class App extends Component {

  //This number change is triggered each time the components with 1-5 rating systems 
  // have a change to their input value. A button or message then renders on the page
  //dependant on the inRange key of its local state.
  numberChange = (key, num) => {
    let number = Number(num);
    if (number > 0 && number < 6) {
      let updateState = {
        [key]: number,
        inRange: true
      };
      return updateState;
    }
    else {
      let updateState = {
        ...this.state,
        inRange: false
      };
      return updateState;
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <AppBar position="static" className="App-header">
            <Toolbar variant="dense">
              <h1 className="App-title">feedback</h1>
            </Toolbar>

          </AppBar>
          <main>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/feeling">
              <Feeling numberChange={this.numberChange} />
            </Route>

            <Route path="/understanding">
              <Understanding numberChange={this.numberChange} />
            </Route>

            <Route path="/support">
              <Support numberChange={this.numberChange} />
            </Route>

            <Route path="/comment">
              <Comment numberChange={this.numberChange} />
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
