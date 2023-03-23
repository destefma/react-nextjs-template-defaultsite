import { postRequest } from "./Request";

class AuthService {

    static loginUserProfil(username: string, password: string) {

        var authorizationBasic = window.btoa(username + ':' + password);
        return postRequest({
            url: '/auth/login',
            method: "post",
        }, { "username": username, "password": password });
    }

    static signupUserProfil(email: string, username: string,  password: string) {

        var authorizationBasic = window.btoa(email + ':' + password);
       
        return postRequest({
            url: '/auth/register',
            method: "post",
        }, { "email": email, "username": username, "password": password });
    }

    static verifyCurrentUserProfil(jwtToken: string, userId: number){
       return postRequest({
            url: '/auth/verify',
            method: "post",
        }, { "userid": userId, "jwttoken": jwtToken });
    }
}

export default AuthService;
