import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from '@material-ui/core/Button';



class Review extends Component {
    handleSubmit = () => {
        this.props.history.push('/feeling');
    }
    render() {
        return (
            <div >
                <br />
                <br />
                <br />

                <Button size="large"
                    className="homeButton"
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={this.handleSubmit}>
                    new feedback
                </Button>

            </div >
        );
    }
}

export default withRouter(Review);