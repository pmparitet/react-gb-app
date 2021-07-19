import React from 'react';

export function MessageText(props) {
    return (
        <div>
            <p>Автор: {props.author}</p>
            <p>Tекст сообщения: {props.text}</p>
        </div>
    );
}
