import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class DeleteButton extends React.Component {
    render() {
        const {value, type, disabled,id} = this.props;

        return (
            <button className={'button button__delete'} type={type} disabled={disabled} id={id}>
                {value}
            </button>
        );
    }
}

DeleteButton.propTypes = {
    value: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.string,
    disabled: PropTypes.bool,
    id:PropTypes.string,
};

DeleteButton.defaultProps = {
    value: '',
    type: 'button',
    disabled: false,
    id: ''

};