import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class EditButton extends React.Component {
    render() {
        const {value, type, disabled,id, onClick} = this.props;

        return (
            <button className={'button button__edit'} type={type} disabled={disabled} id={id} onClick ={onClick}>
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
    onClick:PropTypes.func

};

EditButton.defaultProps = {
    value: '',
    type: 'button',
    disabled: false,
    id: '',
    onClick:()=>{}

};