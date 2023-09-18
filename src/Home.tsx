import { useContext } from "react";

import { AuthContext } from "./context/AuthContext";

function Home() {
    const { user } = useContext(AuthContext);
    const name = user?.user_metadata.name;

    return (
        <>
            <h1>HOME</h1>
            <p>Bem vinda ao site {name}!!</p>
        </>
    );
}

export default Home;
