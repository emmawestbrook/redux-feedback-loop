import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Review extends Component {
    handleSubmit = () => {
        this.props.history.push('/feeling');
    }
    render() {
        return (
            <div >

                <button type="submit" onClick={this.handleSubmit}>new feedback</button>

            </div>
        );
    }
}

export default withRouter(Review);