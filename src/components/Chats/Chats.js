import { useParams, Redirect } from 'react-router-dom';
import { Grid, Paper } from '@material-ui/core';
import { MessageForm } from './MessageForm/MessageForm';
import { MessageList } from './MessageList/MessageList';
import { ChatList } from './ChatList/ChatList';
import { listChat } from './dataListChat';

export function Chats(props) {
    const { chatId } = useParams();

    if (chatId && !listChat.find((item) => item.id === +chatId)) {
        return <Redirect to="/chats" />;
    }

    return (
        <div>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Paper>
                        <ChatList listChat={listChat} />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <MessageList messageList={props.messageList} />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <MessageForm
                            messageList={props.messageList}
                            value={props.value}
                            handleChange={props.handleChange}
                            changeMessageList={props.changeMessageList}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}
