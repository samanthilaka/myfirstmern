import React from 'react';
function Tweet(props) {

    return (
        <div className='tweet'>
            <h3>{props.name}</h3>
            <p>{props.message}</p>
            <p>{props.count}</p>
        </div>
    );

}

export default Tweet;