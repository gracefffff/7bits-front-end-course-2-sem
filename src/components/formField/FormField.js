import React from 'react';
import PropTypes from 'prop-types';
 import './style.css';

 export default class FormField extends React.Component {
     render() {
         const {className, value, type,name,placeholder,onChange,id} = this.props;
         return (
             <input
                 className={'form-field ${className}'}
                 value = {value}
                 type ={type}
                 name={name}
                 placeholder={placeholder}
                 onChange={onChange}
                 id={id}
                 required={true}
                 />
         );
     };
 };
 FormField.defaultProps = {
     className:'',
     type: 'text',
     name: '',
     placeholder: '',
     id:'',
     onChange: ()=> {}
 };
 FormField.propTypes = {
   value: PropTypes.string,
   className: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
     placeholder: PropTypes.string,
     onChange: PropTypes.func,
     id:PropTypes.string

 };