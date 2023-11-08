import { useState } from "react";

export default function LoginPage({ addUser }){
    const [username, setUsername] = useState({username:""});

    function handleUsername(e) {
        const newUsername = { ...username, [e.target.name]:e.target.value}
        setUsername(newUsername);
    }

    function handleLogin(e) {
        e.preventDefault();
        addUser(username);
    }

    return(
        <form onSumbit={handleLogin}>
            <label>Username</label>
            <input
                type="text"
                name="user"
                value={username.name}
                onChange={handleUsername}
            />
            <button type="submit">Login</button>
        </form>
    );
}