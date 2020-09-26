import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';



class Feeling extends Component {
    state = {
        feeling: null,
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
            type: "SET_FEELING",
            payload: this.state.feeling
        });
        this.props.history.push('/understanding');
    }

    render() {
        return (
            <div >
                <h1>how are you feeling today?</h1>

                <TextField variant="outlined" type="number" color="secondary" placeholder="rate 1-5"
                    onChange={(event) => this.handleChange('feeling', event)}></TextField>


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

export default connect(reduxStateProps)(withRouter(Feeling));
