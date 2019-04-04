import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

export default class StatusButton extends React.Component {
    render() {

        const {value, type, disabled,id, name, onClick} = this.props;


        return (
            <button className={`button button__${name} `} type={type} disabled={disabled} id={id} onClick={onClick}>
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
    name:PropTypes.string,
    onClick:PropTypes.func
};

StatusButton.defaultProps = {
    value: '',
    type: 'button',
    disabled: false,
    id: '',
    name:'',
    onClick:()=>{}

};