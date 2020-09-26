import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';


class Understanding extends Component {
    state = {
        understanding: null,
        inRange: false
    };

    handleChange = (key, event) => {
        this.setState(
            this.props.numberChange(key, event.target.value)
        );
    }

    handleSubmit = (event) => {
        console.log('submit', this.state);
        this.props.dispatch({
            type: "SET_UNDERSTANDING",
            payload: this.state.understanding
        });
        this.props.history.push('/support');
    }

    render() {
        return (
            <div >
                <h1>how well are you understanding the content?</h1>
                <TextField variant="outlined" type="number" color="secondary" placeholder="rate 1-5"
                    onChange={(event) => this.handleChange('understanding', event)}></TextField>
                <br />
                <br />
                { this.state.inRange ?
                    <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>next</Button> :
                    <p>please enter a number between 1 and 5!</p>
                }

            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Understanding));
