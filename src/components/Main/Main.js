import { NavLink } from 'react-router-dom';

export function Main(props) {
    return (
        <div>
            <h1>Homepage</h1>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        activeStyle={{
                            color: 'red',
                        }}
                    >
                        Main
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/profile"
                        activeStyle={{
                            color: 'red',
                        }}
                    >
                        Profile
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/chats"
                        activeStyle={{
                            color: 'red',
                        }}
                    >
                        Chats
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
