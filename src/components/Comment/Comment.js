import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Comment extends Component {
    handleSubmit = () => {
        this.props.history.push('/review');
    }
    render() {
        return (
            <div >
                <p>comment</p>
                <button type="submit" onClick={this.handleSubmit}>next</button>

            </div>
        );
    }
}

export default withRouter(Comment);
