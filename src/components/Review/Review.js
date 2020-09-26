import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import axios from "axios";


class Review extends Component {
    handleSubmit = () => {
        alert("thanks for your feedback!");
        axios({
            method: "POST",
            url: "/feedback",
            data: this.props.feedback
        }).then((response) => {
            console.log("POST", response);
            this.props.dispatch({
                type: "RESET_STATE",
            });
        }).catch((err) => {
            console.error("POST error", err);
        });
        this.props.history.push('/');
    }
    render() {
        return (
            <div >
                <h1>review your feedback</h1>
                <h3>feeling: {this.props.feedback.feeling}/5</h3>
                <h3>understanding: {this.props.feedback.understanding}/5</h3>
                <h3>support: {this.props.feedback.support}/5</h3>
                <h3>comment: {this.props.feedback.comment}</h3>

                <button type="submit" onClick={this.handleSubmit}>submit</button>

            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Review));
