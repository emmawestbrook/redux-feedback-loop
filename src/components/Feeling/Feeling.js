import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";



class Feeling extends Component {
    state = {
        feeling: null,
        inRange: false
    };

    handleChange = (key, event) => {
        let number = Number(event.target.value);
        if (number > 0 && number < 6) {
            let updateState = {
                [key]: number,
                inRange: true
            };
            this.setState(updateState);
            return;
        }
        else {
            let updateState = {
                ...this.state,
                inRange: false
            };
            this.setState(updateState);
            return;
        }
    }

    handleSubmit = (event) => {
        console.log('submit', this.state);
        this.props.dispatch({
            type: "SET_FEELING",
            payload: this.state.feeling
        });
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div >
                <h1>how are you feeling today?</h1>
                <input type="number" placeholder="enter a number between 1-5"
                    onChange={(event) => this.handleChange('feeling', event)}></input>
                <br />
                { this.state.inRange ?
                    <button type="submit" onClick={this.handleSubmit}>next</button> :
                    <p>please enter a number between 1 and 5!</p>
                }
            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Feeling));
