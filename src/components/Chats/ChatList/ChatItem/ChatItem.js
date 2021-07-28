import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core/';
import { NavLink } from 'react-router-dom';

export function ChatItem(props) {
    return (
        <>
            <NavLink
                to={`/chats/${props.chatId}`}
                activeStyle={{
                    color: 'red',
                }}
            >
                <ListItem>
                    <ListItemAvatar>
                        <Avatar alt={props.alt} src={props.src} />
                    </ListItemAvatar>
                    <ListItemText primary={props.primary} />
                </ListItem>
            </NavLink>
        </>
    );
}
