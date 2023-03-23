import { createContext, useEffect, useState } from "react";
import { useCookies} from 'react-cookie'
import isStringEmpty from "../helper/isStringEmpty";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

     const [auth, setAuth] = useState({});

     const [cookies, setCookie, removeCookie] = useCookies(['gastro_access_token', 'gastro_refresh_token', 'gastro_userid', 'gastro_username']);
     

     if (!isStringEmpty(cookies.gastro_access_token)){

          auth.jwtToken = cookies.gastro_access_token;
          auth.userid = cookies.gastro_userid;
          auth.username = cookies.gastro_username;
     }

     return (
          <AuthContext.Provider value={{isAuth: !isStringEmpty(auth.jwtToken), auth, setAuth, cookies, setCookie }}>
               {children}
          </AuthContext.Provider>
     )
}

export default AuthContext;
