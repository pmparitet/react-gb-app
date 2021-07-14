'use strict';

import React from 'react';

function Message(props) {
    return (
        <div className="message">
            <h1>Hello {props.name}</h1>
            <p>ReactJS - Lesson 1</p>
        </div>
    );
}

export default Message;
