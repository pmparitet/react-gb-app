'use strict';

import logo from './logo.svg';
import './App.css';
import Message from './components/Message';

const myName = 'Alex';

function App() {
    return (
        <div className="App">
            <Message name={myName} />
        </div>
    );
}

export default App;
