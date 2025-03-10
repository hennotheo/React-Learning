import React, {useState} from 'react';
import LoginForm from './components/LoginForm';

const App = () => {
    const [feedback, setFeedback] = useState("");

    const handleLogin = (userInfo) => {
        setFeedback(`Logging in with username: ${userInfo.username}!`);
    };

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onLogin={handleLogin} />
            <p>{feedback}</p>
        </div>
    );
};

export default App;