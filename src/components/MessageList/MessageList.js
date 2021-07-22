import { List } from '@material-ui/core';
import { MessageText } from './MessageText/MessageText';

export function MessageList(props) {
    let renderMessageList = props.messageList.map((message, index) => (
        <MessageText key={index} author={message.author} text={message.text} />
    ));

    return (
        <div>
            <List>{renderMessageList}</List>
        </div>
    );
}
