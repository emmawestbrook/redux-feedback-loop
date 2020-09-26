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
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <main>
            <Route path="/#/" exact>
              <App />
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
