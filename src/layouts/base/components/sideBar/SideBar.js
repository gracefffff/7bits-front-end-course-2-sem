import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';

import './style.css';

export default class SideBar extends React.Component {
    render() {
        const { className } = this.props;

        return (
            <aside className={`side-bar${className ? ` ${className}` : ''}`}>
                <ul className='side-bar-list'>
                    <li className='side-bar__title'>
                        <NavLink exact to={'/todo'} className={'side-bar__link side-bar__todo'}
                                 activeClassName={'side-bar__link_active side-bar__todo-active'}>
                            To Do
                        </NavLink>
                    </li>
                    <li className='side-bar__title'>
                        <NavLink exact to={'/'} className={'side-bar__link side-bar__done'}
                                 activeClassName={'side-bar__link_active side-bar__done-active'}>
                            Done
                        </NavLink>
                    </li>
                </ul>
            </aside>
        );
    };
};

SideBar.propTypes = {
    className: PropTypes.string
};

SideBar.defaultProps = {
    className: ''
};