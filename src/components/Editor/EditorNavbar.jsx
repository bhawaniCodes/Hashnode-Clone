import React, { useState } from "react";
import styled from "styled-components";
import publishIcon from "../../images/publishIcon.svg";
import roundLoading1 from "../../images/roundLoading1.gif";
import { AiOutlineSetting, AiOutlineCloud } from "react-icons/ai";
import { NewLogo } from "../../images/NewLogo";
import { SettingDiv } from "./SettingDiv";
import { Link } from "react-router-dom";

export const EditorNavbar = ({
    liveSaving,
    publishBlog,
    wordCount,
    paragraphCount,
    readTime,
    showTags,
}) => {
    const [settingDisplay, setSettingDisplay] = useState(false);

    return (
        <>
            <HeaderDiv>
                <Link to="/">
                    <NewLogo width="128px" height="21.95px" />
                </Link>
                <div>
                    {!liveSaving ? (
                        <SettingButton1>
                            <AiOutlineCloud />
                            <p>Saved</p>
                        </SettingButton1>
                    ) : (
                        <SettingButton1>
                            <img
                                src={roundLoading1}
                                alt={roundLoading1}
                                style={{ width: "1rem" }}
                            />
                            <p>Saving</p>
                        </SettingButton1>
                    )}

                    <SettingButton onClick={() => setSettingDisplay(true)}>
                        <AiOutlineSetting />
                        <p>Settings</p>
                    </SettingButton>
                    <PublishButton onClick={publishBlog}>
                        <img src={publishIcon} alt={publishIcon} />
                        <p>Publish</p>
                    </PublishButton>
                </div>
                {settingDisplay ? (
                    <SettingDiv
                        wordCount={wordCount}
                        paragraphCount={paragraphCount}
                        readTime={readTime}
                        setSettingDisplay={setSettingDisplay}
                        publishBlog={publishBlog}
                        showTags={showTags}
                    />
                ) : null}
            </HeaderDiv>
        </>
    );
};

const HeaderDiv = styled.div`
    width: 92%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(229, 231, 235);
    padding: 1rem 0.5rem;
    margin-top: 0 !important;
`;

const SettingButton1 = styled.button`
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: transparent;
    padding-top: 0.5rem !important;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    --tw-text-opacity: 1;
    color: rgba(55, 65, 81, var(--tw-text-opacity));
    background-color: white;
    margin-right: 1rem;

    & > :nth-child(1) {
        margin-bottom: -5px;
        font-size: 1.3rem;
        opacity: 0.75;
    }

    & > p {
        display: inline;
        margin-left: 10px;
        padding-bottom: 2px;
        font-weight: 500;
    }
`;

const SettingButton = styled.button`
    border-radius: 0.5rem;
    border-width: 1px;
    border-color: transparent;
    padding-top: 0.5rem !important;
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    --tw-text-opacity: 1;
    color: rgba(55, 65, 81, var(--tw-text-opacity));
    cursor: pointer;
    background-color: white;
    margin-right: 1rem;

    &:hover {
        background-color: #efefef;
    }

    & > :nth-child(1) {
        margin-bottom: -5px;
        font-size: 1.3rem;
        opacity: 0.75;
    }

    & > p {
        display: inline;
        margin-left: 10px;
        padding-bottom: 2px;
        font-weight: 500;
    }
`;


const PublishButton = styled.button`
    border-radius: 0.5rem;
    border: 1px solid rgb(41, 98, 255);
    padding: 0.25rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    color: rgb(41, 98, 255);
    transition-property: background-color, border-color, color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
    transition-duration: 150ms;
    background-color: #ffffff;

    &:hover {
        background-color: rgb(227, 242, 253);
    }

    & > img {
        width: 18px;
        fill: rgb(124, 153, 235) !important;
    }

    & > :nth-child(1) {
        margin-bottom: -3px;
        font-size: 1.3rem;
        opacity: 0.75;
    }

    & > p {
        display: inline;
        margin-left: 10px;
        padding-bottom: 2px;
        font-weight: 500;
    }
`;