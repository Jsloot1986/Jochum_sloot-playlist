import React from 'react';

function Button(props) {
    return (
        <button className="filterButtons" onClick={props.handleFilterButton}>{props.name}</button>
    )
}

export default Button