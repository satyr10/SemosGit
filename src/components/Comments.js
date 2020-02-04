import React from 'react';
import PropTypes from 'prop-types';

export class Comments extends React.Component {

    render() {
        console.log(this.props)
        return(
            <div>
            <h2>{this.props.date}</h2>
            <h2>{this.props.broj}</h2>
            {this.props.isValid ? <h2>Hello</h2> : <h2>Goodbye</h2>}
            </div>
        )
    }
}

Comments.propTypes = {
    date: PropTypes.string,
    broj: PropTypes.number,
    isValid: PropTypes.bool
}