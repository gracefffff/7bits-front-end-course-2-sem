import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";
import StatusButton from "../doneButton/StatusButton";

export default class Article extends React.Component {
    render() {






        return (
            <article className="article">
                <div className="done-button-box">
                <StatusButton name={this.props.status}/>
                </div>
                <p className="article__description">{this.props.taskName}</p>
                <div className ="article__buttons-active">
                <EditButton/>
                    <DeleteButton/>
                </div>
            </article>
        );
    };
};

Article.propTypes = {
    taskName: PropTypes.string,
    page:PropTypes.string,
    status:PropTypes.string,
    name:PropTypes.string
};

Article.defaultProps = {
    taskName: '',
        page:'',
    status:'',
    name:''
};