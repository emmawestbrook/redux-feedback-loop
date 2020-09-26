import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
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
                <p>click a score to change it</p>
                <Link to="/feeling"><h3>feeling: {this.props.feedback.feeling}/5</h3></Link>
                <Link to="/understanding"><h3>understanding: {this.props.feedback.understanding}/5</h3></Link>
                <Link to="/support"><h3>support: {this.props.feedback.support}/5</h3></Link>
                <Link to="/comment"><h3>comment: {this.props.feedback.comment}</h3></Link>

                <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmit}>submit</Button>
            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Review));
