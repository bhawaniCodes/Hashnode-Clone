import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect, useParams } from "react-router-dom";
import { Login } from "../components/Login";
import { auth } from "../config/firebase-config";
import { PrivateRoutes } from "./PrivateRoutes";
import { useHistory, useLocation } from "react-router";
import { Editor } from "../components/Editor/Editor";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Profile } from "../components/Profile/Profile";
import { UserForm } from "../components/UserForm/UserForm";
import MasterIndex from "../components/MasterPage/MasterInex";
import Index from "../components/Landing Page/IndexAfterLogin";
import Details from "../components/Details";
import Settings from "../components/Dashboard/Settings";
import Drafts from "../components/Dashboard/Drafts";
import Appearance from "../components/Dashboard/Appearance";
import Posts from "../components/Dashboard/Posts";
import Blog from "../components/Blog";
import { getWithExpiry } from "../components/checkExpiry";
import { GeneralSetting } from "../components/Dashboard/GeneralSetting";

const commonUrl = process.env.REACT_APP_COMMON_URL;

export const Router = () => {
    const location = useLocation();
    const history = useHistory();
    let expiry = getWithExpiry("expiry");
    console.log("expiry:", expiry);

    if (localStorage.getItem("user")) {
        const now = new Date();
        localStorage.setItem("expiry", JSON.stringify(now.getTime() + 3000000));
    }
    

    // const logout = async () => {
    //     await auth.signOut();
    //     localStorage.removeItem("user");
    //     history.push("/login");
    // };

    const getEmail = async (token) => {
        const email = await axios.get(`${commonUrl}/users/getemail`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        localStorage.setItem("email", JSON.stringify(email.data.email));
    };

    if (location.search.includes("token=")) {
        if (!localStorage.getItem("user")) {
            const now = new Date();
            const token = location.search.replace("?token=", "");
            console.log("token23434:", token);
            getEmail(token);
            localStorage.setItem(
                "expiry",
                JSON.stringify(now.getTime() + 60000000)
            );
            expiry = getWithExpiry("expiry");
            localStorage.setItem("user", JSON.stringify(token));
        }
    }

    return (
        <div>
            <Switch>
                <Route exact path="/">
                    {expiry ? <Index /> : <MasterIndex />}
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <PrivateRoutes path="/create/story">
                    <Editor />
                </PrivateRoutes>
                <PrivateRoutes exact path="/myblog">
                    <Details />
                </PrivateRoutes>
                <PrivateRoutes path="/dashboard">
                    <Settings />
                </PrivateRoutes>
                <PrivateRoutes path="/drafts">
                    <Drafts />
                </PrivateRoutes>
                <PrivateRoutes path="/appearance">
                    <Appearance />
                </PrivateRoutes>
                <PrivateRoutes path="/posts">
                    <Posts />
                </PrivateRoutes>
                <PrivateRoutes path="/myblog/:id">
                    <Blog />
                </PrivateRoutes>
                <PrivateRoutes path="/profile">
                    <div style={{ display: "flex", padding: "30px" }}>
                        <Sidebar />
                        <Profile />
                    </div>
                </PrivateRoutes>
                <PrivateRoutes path="/settings">
                    <div style={{ display: "flex", paddingLeft: "30px" }}>
                        <Sidebar />
                        <UserForm />
                    </div>
                </PrivateRoutes>
            </Switch>
        </div>
    );
};
