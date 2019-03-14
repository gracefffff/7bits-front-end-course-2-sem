import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Article extends React.Component {
    render() {
        return (
            <article className="article">
                <p className="article__description">{this.props.taskName}</p>
            </article>
        );
    };
};

Article.propTypes = {
    taskName: PropTypes.string
};

Article.defaultProps = {
    taskName: ''
};