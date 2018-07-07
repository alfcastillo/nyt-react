import React from 'react';
const Article = ({ title, url, _id, date, handleClick, buttonText, saved }) => (
    <div>
        <em>{title}</em>
        <button onClick={() => handleClick(_id)}>
            { buttonText }
        </button>
        <a>{url}</a>

    </div>
);

export default Article;