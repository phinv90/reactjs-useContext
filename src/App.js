import React, {useContext} from 'react';
import './App.css';
import {UserContext} from "./context/userContext";

function App() {

    const user = useContext(UserContext)
    if (!user.id)
        return <div>loading...</div>
    return (
        <div className="App">
            <p>
                Hi {user.name.title} {user.name.first} {user.name.last}
            </p>

        </div>
    );
}

export default App;
