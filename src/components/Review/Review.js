import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Review extends Component {
    handleSubmit = () => {
        this.props.history.push('/');
    }
    render() {
        return (
            <div >
                <p>review</p>
                <button type="submit" onClick={this.handleSubmit}>next</button>

            </div>
        );
    }
}

export default withRouter(Review);
