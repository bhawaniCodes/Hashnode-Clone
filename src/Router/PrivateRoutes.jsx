import { Redirect, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../Redux/authReducer/action";
import { auth } from "../config/firebase-config";


export const PrivateRoutes = ({ children, path }) => {
    const user = useSelector((data) => data.user);
    const dispatch = useDispatch();
    console.log('emailId123:', user)

    if (user) {
        return (
            <Route exact path={path}>
                {children}
            </Route>
        );
    } else {
        return <Redirect to='/login' />
    }
};
