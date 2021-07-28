import { useEffect, useState } from 'react';
import './App.css';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Main } from './components/Main/Main';
import { Chats } from './components/Chats/Chats';

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
        <BrowserRouter>
            <div className="App">
                <Switch>
                    <Route exact path="/">
                        <Main />
                    </Route>
                    <Route path="/profile">
                        <Profile />
                    </Route>
                    <Route path="/chats/:chatId?">
                        <Chats
                            messageList={messageList}
                            value={value}
                            handleChange={handleChange}
                            changeMessageList={changeMessageList}
                        />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
