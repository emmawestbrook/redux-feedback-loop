import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";



class Feeling extends Component {

    handleSubmit = () => {
        this.props.history.push('/understanding');
    }
    render() {
        return (
            <div >
                <h1>how are you feeling today?</h1>
                <input type="number" placeholder="enter a number between 1-5"></input>
                <button type="submit" onClick={this.handleSubmit}>next</button>


            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Feeling));
