import { Redirect, Route } from "react-router-dom";
import React, { useEffect } from "react";
import { getWithExpiry } from "../components/checkExpiry";

export const PrivateRoutes = ({ children, path }) => {
    

    // for check expiry of Token
    const expiry = getWithExpiry("expiry");
    console.log("expiry:", expiry);

    if (expiry) {
        return (
            <Route exact path={path}>
                {children}
            </Route>
        );
    } else {
        return <Redirect to="/login" />;
    }
};
