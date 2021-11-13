import { useEffect, useState } from "react";


import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { BsGithub, BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import logo_name from "../images/logo_name.jpg";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import { NewLogo } from "../images/NewLogo";
import axios from "axios";
const commonUrl = process.env.REACT_APP_COMMON_URL;

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();


    const handleLoginWithGoogle = async () => {
        try {
            await window.open(`${commonUrl}/auth/google/`, "_self");
        } catch (error) {
            console.log(error);
        }
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userData = await axios.post(`${commonUrl}/register`, {
                email,
                password,
            });
            console.log("userData:", userData);
            if (!localStorage.getItem("user") && userData) {
                localStorage.setItem(
                    "email",
                    JSON.stringify(userData.data.user.email)
                );
                localStorage.setItem(
                    "user",
                    JSON.stringify(userData.data.token)
                );
                history.push("/index");
            }
        } catch (error) {
            alert("Please check your email or password");
        }
    };
    const logout = async () => {
        localStorage.removeItem("user");
        localStorage.removeItem("email");
        history.push("/");
    };


    return (
        <LoginMainDiv>
            <MainDiv>
                <Link to="/">
                    <GrClose />
                </Link>
                <div>
                    <LoginContentDiv>
                        <div>
                            <NewLogo width="192px" height="32.32px" />
                        </div>
                        <p>Sign in / Create an account</p>
                        <SignInSecureLinkH1>
                            Sign in using a secure link
                        </SignInSecureLinkH1>
                        <InputSubmitDiv>
                            <form onSubmit={handleSubmit}>
                                <Input
                                    autoFocus
                                    type="email"
                                    placeholder="Enter your email address"
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Input
                                    type="password"
                                    placeholder="Enter your password"
                                    minLength="6"
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    required
                                />
                                <SubmitButton type="submit">
                                    Submit
                                </SubmitButton>
                            </form>
                        </InputSubmitDiv>
                        <ConnectWithH1>Or, connect with</ConnectWithH1>
                        <AllDivsButton>
                            <AllA style={{ background: "rgb(51,51,51)" }}>
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

const AllA = styled.a`
    display: flex;
    width: 11rem;
    margin: 0.5rem;
    cursor: pointer;
    padding: 1rem;
    border-radius: 0.5rem;
    border-width: 1px;
    border: 1px solid rgb(229, 231, 235);
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1rem;

    & > :nth-child(2) {
        padding-left: 0.5rem;
        padding-top: 0.1rem;
    }
`;

const AllDivsButton = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-left: -0.5rem;
    margin-right: -0.5rem;
    line-height: 1.375;
`;

const InputSubmitDiv = styled.div`
    margin-bottom: 4rem;
`;

const ConnectWithH1 = styled.h1`
    line-height: 1.25;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.5rem !important;
    margin: 0;
    color: rgb(97, 97, 97);
`;

const SubmitButton = styled.button`
    padding: 0.75rem 1.25rem;
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: rgb(41, 98, 255);
    background-color: rgb(41, 98, 255);
    font-weight: 700;
    line-height: 1.375;
    letter-spacing: -0.025em;
    color: rgb(255, 255, 255);
    cursor: pointer;
    font-size: 1.1rem;
`;
const Input = styled.input`
    width: 40%;
    margin-right: 15px;
    border-radius: 0.5rem;
    border: 1px solid #aca9a94e;
    border-width: 1px;
    background-color: transparent;
    padding: 1rem;
    /* outline: 1px solid transparent; */
    /* outline-offset: 2px; */
    margin-bottom: 1rem;
    font-size: 100%;

    &::placeholder {
        opacity: 0.8;
    }
`;
const SignInSecureLinkH1 = styled.h1`
    line-height: 1.25;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 0.75rem !important;
    margin: 0;
    color: rgb(97, 97, 97);
`;

const LoginContentDiv = styled.div`
    padding: 3rem;
    width: 75%;
    margin: auto;
    line-height: 1.375;
    text-align: left;

    & > :nth-child(1) {
        margin-bottom: 2.5rem;
    }
    & > :nth-child(2) {
        margin-bottom: 2.5rem;
        font-weight: 600;
        letter-spacing: -0.025em;
        line-height: 1.375;
        font-size: 1.125rem;
        color: rgba(33, 33, 33, 0.9);
    }
`;

const LoginMainDiv = styled.div`
    background-color: #f5f7fa;
    font-family: Arial, Helvetica, sans-serif;
`;

const MainDiv = styled.div`
    background-color: #f5f7fa;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    & > div {
        background-color: #ffffff;
        width: 66.666667%;
        margin-left: 5rem;
        margin-right: 5rem;
        --tw-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
            var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
        border-width: 1 px;
    }

    & > a {
        position: absolute;
        background-color: #f5f7fa;
        left: 3.5rem;
        top: 3.5rem;
        width: 2rem;
        height: 2rem;
        font-size: 1.5rem;
        color: rgb(55, 65, 81);
        border: none;
        cursor: pointer;

        & > :hover {
            background-color: #d2d5da;
        }
    }
`;
