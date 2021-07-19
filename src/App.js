import { useEffect, useState } from 'react';
import './App.css';
import { MessageForm } from './components/MessageForm/MessageForm';
import { MessageList } from './components/MessageList/MessageList';

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
            <MessageList messageList={messageList} />
            <MessageForm value={value} handleChange={handleChange} changeMessageList={changeMessageList} />
        </div>
    );
}

export default App;
