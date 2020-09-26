import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

class Comment extends Component {
    state = {
        comment: ''
    }

    handleChange = (key, event) => {
        this.setState({
            [key]: event.target.value,
        });
    }

    handleSubmit = () => {
        console.log('submit', this.state);
        this.props.dispatch({
            type: "SET_COMMENT",
            payload: this.state.comment
        });
        this.props.history.push('/review');
    }
    render() {
        return (
            <div >
                <h1>any additional comments?</h1>
                <input type="tezt" placeholder="let us know!"
                    onChange={(event) => this.handleChange('comment', event)}></input>
                <br />
                <br />
                <Button variant="contained" color="primary" type="submit" onClick={this.handleSubmit}>next</Button>

            </div>
        );
    }
}

const reduxStateProps = (reduxState) => ({
    feedback: reduxState.feedbackReducer
});

export default connect(reduxStateProps)(withRouter(Comment));
