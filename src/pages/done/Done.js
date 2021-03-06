import React from 'react';

import Article from '../../components/article/Article';

import list from './list';

import './style.css';

export default class Done extends React.Component {


    renderList = () => {
        return list.data.map((item, index) => {
            return (
                <div className="box-done">
                <Article status={item.status} key={index} taskName={item.taskName} id={item.id} />
                </div>
            );
        });
    };

    render() {
        return (
            <React.Fragment>

                {this.renderList()}
            </React.Fragment>
        );
    };
};