import React from "react";
import styled from "styled-components";
import { AiOutlineSetting } from "react-icons/ai";
import publishIcon from "../../images/publishIcon.svg";
import { GrClose } from "react-icons/gr";
import { Inputbox } from "./Inputbox";

export const SettingDiv = ({
    setSettingDisplay,
    wordCount,
    paragraphCount,
    readTime,
    publishBlog,
}) => {
    return (
        <>
            <SettingMainDiv>
                <div>
                    <CloseButtonToPublish>
                        <HeaderDiv>
                            <SettingCloseButton
                                onClick={() => setSettingDisplay(false)}
                            >
                                <GrClose />
                                <p>Close</p>
                            </SettingCloseButton>
                            <PublishButton onClick={() => publishBlog()}>
                                <img src={publishIcon} alt={publishIcon} />
                                <p>Publish</p>
                            </PublishButton>
                        </HeaderDiv>
                        <div>
                            <h2>Are you ready to publish?</h2>
                            <p>
                                Double-check your article settings before
                                publishing.
                            </p>
                        </div>
                    </CloseButtonToPublish>
                    {paragraphCount !== 0 ? (
                        <SettingCard>
                            <h3>Story Stats</h3>
                            <StoryStatDiv>
                                <div>
                                    <p>Word count:</p>
                                </div>
                                <div>
                                    <p>{wordCount} words</p>
                                </div>
                            </StoryStatDiv>
                            <StoryStatDiv>
                                <div>
                                    <p>Paragraphs:</p>
                                </div>
                                <div>
                                    <p>{paragraphCount} paragraph</p>
                                </div>
                            </StoryStatDiv>
                            <StoryStatDiv>
                                <div>
                                    <p>Read time:</p>
                                </div>
                                <div>
                                    <p>{readTime} minute</p>
                                </div>
                            </StoryStatDiv>
                        </SettingCard>
                    ) : null}

                    <SettingCard>
                        <Inputbox />
                    </SettingCard>
                    <SettingCard>
                        <h3>SEO Title (Optional)</h3>
                        <p>
                            The SEO Title will be shown in place of your Title
                            on search engine results pages, such as a Google
                            search. SEO titles between 40 and 50 characters with
                            commonly searched words have the best
                            click-through-rates.
                        </p>
                        <SeoTitleTextAreaDiv>
                            <textarea
                                type="text"
                                maxLength="70"
                                placeholder="Enter meta title"
                                cols="30"
                                rows="10"
                            ></textarea>
                        </SeoTitleTextAreaDiv>
                    </SettingCard>
                </div>
            </SettingMainDiv>
        </>
    );
};

const SettingMainDiv = styled.div`
    margin-top: 0 !important;
    width: 27rem;
    --tw-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
        0 10px 10px -5px rgba(0, 0, 0, 0.04);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
        var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    background-color: rgb(250, 250, 250);
    border-left-width: 1px;
    overflow: auto;
    height: 100vh;
    z-index: 50;
    position: fixed;
    top: 0;
    right: 0;
    border-color: rgb(229, 231, 235);
    line-height: 1.5;
    text-align: left;

    & > div {
        padding: 1rem 1.5rem 2.5rem;
    }
`;

const SeoTitleTextAreaDiv = styled.div`
    & textarea {
        width: 100%;
        border-radius: 0.5rem;
        background-color: transparent;
        padding: 1rem;
        outline-color: rgba(59, 131, 246, 0.582);
        font-size: 1rem;
        line-height: 1.5rem;
        height: 58px !important;
        resize: vertical;
        border: 1px solid rgb(229, 231, 235);
        box-sizing: border-box;
    }
`;
const SelectTagInput = styled.div`
    & > :nth-child(1) {
        margin-bottom: 0.5rem;

        & input {
            width: 100%;
            padding: 0;
            margin: 0;
            font-size: 100%;
            color: rgb(31, 41, 55);
            background-color: transparent;
            outline: none;
            border: none;
        }
    }
`;
const CloseButtonToPublish = styled.div`
    position: relative;
    & > :nth-child(1) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 1rem;
        border-bottom-width: 1px;

        & > :nth-child(1) {
            margin-right: 0.5rem;
            & > :nth-child(1) {
                width: 1rem;
            }
        }
        & > :nth-child(2) {
            margin-right: 1.25rem;
        }
    }
    & > :nth-child(2) {
        line-height: 1.375;
        margin: 1.25rem 0;

        & > h2 {
            font-weight: 700;
            font-size: 1.25rem;
            line-height: 1.75rem;
            margin-bottom: 0.25rem !important;
            margin: 0;
        }
        & > p {
            color: rgb(97, 97, 97);
            font-size: 1rem;
            line-height: 1.5rem;
            margin: 0;
        }
    }
`;
const SettingCard = styled.div`
    padding: 1rem;
    line-height: 1.5;
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(229, 231, 235);
    border-radius: 0.5rem;
    margin-top: 1.25rem;

    & h3 {
        color: rgb(97, 97, 97);
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-bottom: 0.25rem !important;
        margin: 0;
    }
    & p {
        color: rgb(117, 117, 117);
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-bottom: 0.25rem !important;
        margin: 0;
    }
`;
const StoryStatDiv = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: rgb(97, 97, 97);
    margin: 0 !important;

    & > :nth-child(1) {
        font-weight: 500;
        width: 6rem;
        & p {
            margin: 0 !important;
        }
    }
    & > :nth-child(2) {
        font-weight: 600;
        width: 8rem;
        & p {
            margin: 0 !important;
        }
    }
`;
const SEOTitle = styled.div``;

const SettingCloseButton = styled.button`
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
    background-color: rgb(250, 250, 250);
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
    background-color: rgb(250, 250, 250);

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

const HeaderDiv = styled.div`
    width: 95%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgb(229, 231, 235);
    /* padding-bottom: 0.5rem; */
    margin-top: 0 !important;
`;
