import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { Login } from "../components/Login";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../Redux/authReducer/action";
import { auth } from "../config/firebase-config";
import { PrivateRoutes } from "./PrivateRoutes";
import { useHistory } from "react-router";
import { Editor } from "../components/Editor/Editor";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Profile } from "../components/Profile/Profile";
import { UserForm } from "../components/UserForm/UserForm";



export const Router = () => {
    const user = useSelector((data) => data.user);
    const history = useHistory();
    const dispatch = useDispatch();
    const commonUrl = process.env.REACT_APP_COMMON_URL;
    const logout = async () => {
        await auth.signOut();
        localStorage.removeItem('user')
        history.push("/login");
        dispatch(getEmail(null));
    };

    // Post User for first time while logging
    const postUser = async(user) => {
        const postedUser = await axios.post(`${commonUrl}/users`, { name: user.displayName, email: user.email })
        console.log("postedUser", postedUser);
    }

    auth.onAuthStateChanged((user) => {
        console.log("!localStorage.getItem: ", !localStorage.getItem("user"));
        if (!localStorage.getItem('user') && user) {
            postUser(user);

            localStorage.setItem("user", JSON.stringify(user ? user.email : ''));
            history.push("/");
        }
        dispatch(getEmail(user));
    });
    return (
        <div>
            <Switch>
                <Route exact path="/">
                    Hello Logged in
                    <button onClick={logout}>logout</button>
                    <button onClick={() => history.push("/sign")}>
                        Sign Page
                    </button>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoutes path="/create/story">
                    <Editor />
                </PrivateRoutes>
                <PrivateRoutes path="/profile">
                    <div style={{display: 'flex'}}>
                        <Sidebar />
                        <Profile />
                    </div>
                </PrivateRoutes>
                <PrivateRoutes path="/settings">
                    <div style={{display: 'flex'}}>
                        <Sidebar />
                        <UserForm />
                    </div>
                </PrivateRoutes>
            </Switch>
        </div>
    );
};

