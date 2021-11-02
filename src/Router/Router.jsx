import { signOut } from "@firebase/auth";
import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../Redux/authReducer/action";
import { auth } from "../config/firebase-config";
import { PrivateRoutes } from "./PrivateRoutes";
import { useHistory } from "react-router";

export const Router = () => {
    const user = useSelector((data) => data.user);
    console.log("user1:", user);
    const history = useHistory();

    const dispatch = useDispatch();
    const logout = async () => {
        await auth.signOut();
        dispatch(getEmail(null));
    };

    auth.onAuthStateChanged((user) => {
        dispatch(getEmail(user));
        if (user) history.push("/");
        else history.push("/login");
    });

    return (
        <div>
            <Switch>
                <PrivateRoutes exact path="/">
                    Hello Logged in
                    <button onClick={logout}>Signout</button>
                </PrivateRoutes>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    );
};

/* <Route exact path="/">
                    <>
                        {user ? (
                            <>
                                {" "}
                                <p>Hello Logged in</p>
                                <button onClick={logout}>Signout</button>{" "}
                            </>
                        ) : (
                            <Redirect to="/login" />
                        )}
                    </>
                </Route>
                <Route exact path="/login">
                    <>{user ? <Redirect to="/" /> : <Login />}</>
                </Route> */
