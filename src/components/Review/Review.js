import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import axios from "axios";
import { Paper } from '@material-ui/core';


class Review extends Component {

    handleSubmit = () => {
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
    handleClick = (route) => {
        this.props.history.push(route);

    }

    render() {
        return (
            <div className="reviewDiv">
                <h1>review your feedback</h1>
                <p>click a score to change it</p>
                <Paper variant="outlined" elevation={3} className="reviewCard">

                    <Button onClick={() => this.handleClick('/feeling')}><h3>feeling: {this.props.feedback.feeling}/5</h3></Button> <br />
                    <Button onClick={() => this.handleClick('/understanding')}><h3>understanding: {this.props.feedback.understanding}/5</h3></Button><br />
                    <Button onClick={() => this.handleClick('/support')}><h3>support: {this.props.feedback.support}/5</h3></Button><br />
                    <Button onClick={() => this.handleClick('/comment')}><h3>comment: {this.props.feedback.comment}</h3></Button><br />
                    <Button variant="contained" color="secondary" type="submit" onClick={this.handleSubmit}>submit</Button><br />
                </Paper>
            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Review));
