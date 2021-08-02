import { ChatItem } from './ChatItem/ChatItem';
import { List } from '@material-ui/core/';

export function ChatList(props) {
    const renderChatList = props.listChat.map((item) => (
        <ChatItem key={item.id} chatId={item.id} alt={item.name} src={item.avatar} primary={item.name} />
    ));

    return (
        <div>
            <List>{renderChatList}</List>
        </div>
    );
}
