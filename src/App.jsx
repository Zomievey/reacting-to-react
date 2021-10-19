import React, { useState, useEffect } from 'react';
import Greeter from "./components/Greeter";

const App = () => {
    const [username, setUsername] = useState("");
    const [hasLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true)
        }, 3000);
    }, [hasLoaded]);

    if (hasLoaded) {
        return (
            <>
                <Greeter phrase={"Hello"} name={"Josh"} />
                <Greeter phrase={"Hi"} name={"Garrett"} />
                <Greeter phrase={"Bye"} name={"Jake"} />

                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />

                <p>You are logged in as {username}</p>
            </>
        )
    } else {
        return (
            <>
                <h1>Website loading...</h1>
                <button onClick={() => setLoaded(true)}>Load Website</button>
                {/* <button onClick={() =>}>reset document title</button> */}
            </>
        )
    }
}

export default App;