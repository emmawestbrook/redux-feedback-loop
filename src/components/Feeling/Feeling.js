import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";



class Feeling extends Component {

    state = { feeling: null, };

    handleChange = (event) => {
        this.setState({
            feeling: Number(event.target.value)
        });
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
                    onChange={(event) => this.handleChange(event)}></input>
                <button type="submit" onClick={this.handleSubmit}>next</button>


            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Feeling));
