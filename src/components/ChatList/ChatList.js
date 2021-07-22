import { ChatItem } from './ChatItem/ChatItem';
import { List } from '@material-ui/core/';
import faker from 'faker';

export function ChatList(props) {
    // получение данных -->
    const listChat = Array.from({
        length: 5,
    }).map(() => ({
        id: faker.datatype.uuid(),
        avatar: faker.image.avatar(),
        name: faker.name.firstName(),
    }));
    // <--

    const renderChatList = listChat.map((item) => (
        <ChatItem key={item.id} alt={item.name} src={item.avatar} primary={item.name} />
    ));

    return (
        <div>
            <List>{renderChatList}</List>
        </div>
    );
}
