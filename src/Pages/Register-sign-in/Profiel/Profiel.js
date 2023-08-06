import React, {useContext} from 'react';
import {AuthenticationContext} from "../../../context/AuthenticationProvider/AuthenticationContext";
import {Link} from "react-router-dom";

function Profiel() {
    const {isAuth, login, logout} = useContext(AuthenticationContext)


    return (
        <div>
            <h1>PROFIEL // alleen zichtbaar bij log in</h1>
            <Link to='../login'>
                <button type='button' onClick={isAuth ? logout : login}>{isAuth ? 'log uit' : 'log in'}</button>
            </Link>

            {isAuth && <span>Welkom naam</span>}
        </div>
    );
}

export default Profiel;