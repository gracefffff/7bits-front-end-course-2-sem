import React from 'react';
import PropTypes from 'prop-types';

import './style.css';
import DeleteButton from "../deleteButton/DeleteButton";
import EditButton from "../editButton/EditButton";
import StatusButton from "../doneButton/StatusButton";

export default class Article extends React.Component {
    onClickDeleteTask = (taskId) => {
        console.log(taskId);
    };
    onClickEditTask = (taskID) => {
        console.log(taskID);
    };
    onClickDoneTask = (taskID) => {
        console.log(taskID);
    }
    render() {






        return (
            <article className="article">
                <div className="done-button-box">
                <StatusButton name={this.props.status} onClick ={()=>this.onClickDoneTask(this.props.id)}/>
                </div>
                <p className="article__description">{this.props.taskName}</p>
                <div className ="article__buttons-active">
                <EditButton onClick ={()=>this.onClickEditTask(this.props.id)}/>
                    <DeleteButton id={this.props.id} onClick={() => this.onClickDeleteTask(this.props.id)}/>
                </div>
            </article>
        );
    };
};

Article.propTypes = {
    taskName: PropTypes.string,
    page:PropTypes.string,
    status:PropTypes.string,
    name:PropTypes.string,
    id:PropTypes.string
};

Article.defaultProps = {
    taskName: '',
        page:'',
    status:'',
    name:'',
    id:''
};