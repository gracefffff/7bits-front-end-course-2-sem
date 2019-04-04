import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class EditButton extends React.Component {
    render() {
        const {value, type, disabled,id} = this.props;

        return (
            <button className={'button button__edit'} type={type} disabled={disabled} id={id}>
                {value}
            </button>
        );
    }
}

EditButton.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    id:PropTypes.string,
};

EditButton.defaultProps = {
    value: '',
    type: 'button',
    disabled: false,
    id: ''

};