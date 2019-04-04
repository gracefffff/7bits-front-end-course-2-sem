import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class StatusButton extends React.Component {
    render() {

        const {value, type, disabled,id, name} = this.props;


        return (
            <button className={`button button__${name} `} type={type} disabled={disabled} id={id}>
                {value}
            </button>
        );
    }
}

StatusButton.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    id:PropTypes.string,
    name:PropTypes.string
};

StatusButton.defaultProps = {
    value: '',
    type: 'button',
    disabled: false,
    id: '',
    name:''

};