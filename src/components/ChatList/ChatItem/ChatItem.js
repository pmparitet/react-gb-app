import { ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core/';

export function ChatItem(props) {
    return (
        <>
            <ListItem>
                <ListItemAvatar>
                    <Avatar alt={props.alt} src={props.src} />
                </ListItemAvatar>
                <ListItemText primary={props.primary} />
            </ListItem>
        </>
    );
}
