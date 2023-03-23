import React,{useEffect, useState} from 'react'
import isStringEmpty from '../../helper/isStringEmpty';
import useAuth from '../../hooks/useAuth'
import Login from './Login'

const RequireAuth = ({ allowedRoles, jwtToken,  children }) => {

    //Allowed Roles müssen noch eingebaut werden.

    return !isStringEmpty(jwtToken) ? children : <Login />;
};

export default RequireAuth