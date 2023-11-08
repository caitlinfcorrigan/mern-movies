import { useState } from "react";

export default function LoginPage(){
    const [username, setUsername] = useState("");

    function handleUsername(e) {
        const newUsername = { ...username, e.target.value}
        setUsername(newUsername);
    }

    function handleLogin(e) {
        e.preventDefault();
        addUser(username);
    }
    
    return(
        <form>
            <label>Username</label>
            <input
                type="text"
                name="user"
                value={username}
                onChange={={handleUsername}}
            />
            <button type="submit">Login</button>
        </form>
    );
}