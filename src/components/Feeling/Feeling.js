import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';


class Feeling extends Component {
    handleSubmit = () => {
        this.props.history.push('/understanding');
    }
    render() {
        return (
            <div >
                <p>feeling</p>
                <button type="submit" onClick={this.handleSubmit}>next</button>

            </div>
        );
    }
}

export default withRouter(Feeling);
