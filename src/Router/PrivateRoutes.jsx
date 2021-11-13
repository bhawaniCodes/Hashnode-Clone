import { Redirect, Route } from "react-router-dom";
import React, { useEffect } from "react";


export const PrivateRoutes = ({ children, path }) => {
    let user = JSON.parse(localStorage.getItem("user"));
    console.log("user:", user);

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
