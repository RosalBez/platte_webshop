import React, {useContext} from 'react';
import {AuthenticationContext} from "../../../context/AuthenticationProvider/AuthenticationContext";
import {Link} from "react-router-dom";

function Profiel() {
    const {isAuth, login, logout} = useContext(AuthenticationContext)


    return (
        <div>
            <h1>PROFIEL </h1>
            {/*<Link to='../RegisterSignIn'> als ik dit aan zet kan ik nog kiezen of ik bij uitloggen wil navigeren naar de inlogpagina, dit kan ik nog navragen bij gebruikers*/}
                <button type='button' onClick={isAuth ? logout : login}>{isAuth ? 'log uit' : 'log in'}</button>
            {/*</Link>*/}

            {isAuth && <span>Welkom naam</span>}
        </div>
    );
}

export default Profiel;