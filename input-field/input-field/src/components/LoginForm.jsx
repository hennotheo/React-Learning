import React, { useRef } from 'react';

const LoginForm = ({ onLogin }) => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        onLogin({ username, password });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" ref={usernameRef} />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" ref={passwordRef} />
            </div>
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;