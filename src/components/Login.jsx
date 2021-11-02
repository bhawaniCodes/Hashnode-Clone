import { useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "@firebase/auth";
import {
    auth,
    gitHubProvider,
    googleProvider,
} from "../config/firebase-config";

import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import logo_name from "../images/logo_name.jpg";
import { useDispatch, useSelector } from "react-redux";
import { getEmail } from "../Redux/authReducer/action";
import { useHistory } from "react-router";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const user = useSelector((data) => data.user);
    const history = useHistory();

    const handleLoginWithGithub = async () => {
        // try {
        //     let userGit = await auth.signInWithRedirect(gitHubProvider);
        //     console.log('userGit:', userGit)
        //     dispatch(getEmail(userGit));
        // } catch (error) {
        //     console.log(error);
        // }
    };

    const handleLoginWithGoogle = async () => {
        try {
            await auth.signInWithRedirect(googleProvider);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = async () => {
        try {
            const userData = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("handleSubmit1");
            dispatch(getEmail(userData));
        } catch (error) {
            if (error.message.includes("(auth/email-already-in-use).")) {
                console.log("handleSubmit1error");
                console.log(error.message);
                login();
            } else console.log("err: handleSubmit1AllError", error.message);
        }
    };

    const login = async () => {
        try {
            const userData = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            console.log("login2");
            dispatch(getEmail(userData));
            history.push("/");
        } catch (error) {
            console.log("login2");
            alert(error.message);
            console.log(error.message);
        }
    };

    const logout = async () => {
        await auth.signOut(auth);
        console.log("logout:", logout);
        dispatch(getEmail(null));
    };

    return (
        <LoginMainDiv>
            <MainDiv>
                <button>
                    <GrClose />
                </button>
                <div>
                    <LoginContentDiv>
                        <div>
                            <LogoImageWithName
                                src={logo_name}
                                alt={logo_name}
                            />
                        </div>
                        <p>Sign in / Create an account</p>
                        <SignInSecureLinkH1>
                            Sign in using a secure link
                        </SignInSecureLinkH1>
                        <InputSubmitDiv>
                            <Input
                                autoFocus
                                type="email"
                                placeholder="Enter your email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <Input
                                type="password"
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <SubmitButton onClick={handleSubmit}>
                                Submit
                            </SubmitButton>
                        </InputSubmitDiv>
                        <ConnectWithH1>Or, connect with</ConnectWithH1>
                        <AllDivsButton>
                            <AllA
                                onClick={handleLoginWithGithub}
                                style={{ background: "rgb(51,51,51)" }}
                            >
                                <BsGithub fontSize="1.5rem" />
                                <span>GitHub</span>
                            </AllA>
                            <AllA
                                onClick={handleLoginWithGoogle}
                                style={{
                                    background: "rgb(255,255,255)",
                                    color: "rgb(0,0,0)",
                                }}
                            >
                                <FcGoogle fontSize="1.5rem" />
                                <span>Google</span>
                            </AllA>
                            <AllA style={{ background: "rgb(59,89,152)" }}>
                                <BsFacebook fontSize="1.5rem" />
                                <span>Facebook</span>
                            </AllA>
                            <AllA
                                onClick={logout}
                                style={{ background: "rgb(0,119,181)" }}
                            >
                                <FaLinkedin fontSize="1.5rem" />
                                <span>Linkedin</span>
                            </AllA>
                        </AllDivsButton>
                    </LoginContentDiv>
                </div>
            </MainDiv>
        </LoginMainDiv>
    );
};
