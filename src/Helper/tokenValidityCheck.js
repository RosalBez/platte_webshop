import jwt_decode from "jwt-decode"

export function checkTokenValidity( token ) {
    const decodedToken = jwt_decode(token);

    const testExpirationTime = {
        ...decodedToken,
        exp: 1687266600
    }

    const expirationTime = testExpirationTime.exp * 1000;
    // const expirationTime = decodedToken.exp * 1000;

    const isExpired = Date.now() > expirationTime;

    return !isExpired;
}
