import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Understanding extends Component {
    handleSubmit = () => {
        this.props.history.push('/support');
    }
    render() {
        return (
            <div >
                <p>Understanding</p>
                <button type="submit" onClick={this.handleSubmit}>next</button>

            </div>
        );
    }
}

export default withRouter(Understanding);
