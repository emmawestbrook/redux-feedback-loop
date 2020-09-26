import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Support extends Component {
    handleSubmit = () => {
        this.props.history.push('/comment');
    }
    render() {
        return (
            <div >
                <p>Support</p>
                <button type="submit" onClick={this.handleSubmit}>next</button>

            </div>
        );
    }
}

export default withRouter(Support);
