import { useEffect, useState } from 'react';
import './App.css';
import { MessageForm } from './components/MessageForm/MessageForm';
import { MessageList } from './components/MessageList/MessageList';
import { Grid, Paper } from '@material-ui/core';
import { ChatList } from './components/ChatList/ChatList';

function App() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const [messageList, setMessageList] = useState([]);

    const changeMessageList = () => {
        let newMessage = { author: 'кто-то', text: value };
        setMessageList([...messageList, newMessage]);
    };

    useEffect(() => {
        if (messageList.length > 0 && messageList[messageList.length - 1].author !== 'Bot') {
            setTimeout(() => {
                setMessageList([...messageList, { author: 'Bot', text: 'сообщение принято!' }]);
            }, 1500);
        }
    }, [messageList]);

    return (
        <div className="App">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3}>
                    <Paper>
                        <ChatList />
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <MessageList messageList={messageList} />
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={6}>
                    <Paper>
                        <MessageForm
                            messageList={messageList}
                            value={value}
                            handleChange={handleChange}
                            changeMessageList={changeMessageList}
                        />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default App;
