import React, { useContext } from 'react';
import { AuthenticationContext} from "../../../context/AuthenticationProvider/AuthenticationContext";

function Gegevens() {
    const { user } = useContext(AuthenticationContext);

    return (
        <div>
            <h1>Gegevenspagina</h1>
            <p>Gebruikersnaam: {user.username}</p>
            <p>Emailadres: {user.email}</p>
            <p> Info: {user.info}</p>

        </div>
    );
}

export default Gegevens;
