import jwt_decode from "jwt-decode"

export function checkTokenValidity( token ) {
    const decodedToken = jwt_decode(token);    /******als er een token in de local storage zit, wordt ie hiermee gedecode****/
    const tokenExpirationTime = decodedToken.exp * 1000;   /***** decoded token omzetten naar een datum****/
    const isExpired = Date.now() > tokenExpirationTime  /****datum van de decoded token vergelijken met de huidige dag en tijd**/
    return !isExpired;    /***returnen of de token nog valid is of niet****/

}