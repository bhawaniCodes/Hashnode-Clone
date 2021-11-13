import React, {useState } from "react";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import "tippy.js/dist/tippy.css";
import { Guide } from "./Guide";
import { EditorLeftOptionBar } from "./EditorLeftOptionBar";
import { EditorRightOptionBar } from "./EditorRightOptionBar";

export const EditorOptionBar = (
    {
        handleOptions, uploadImage, storeData, handleChangeData
     }
) => {
    const [leftOption, setLeftOption] = useState(0);
    
    
        // Function for find & click on left side options
        const handleLeftOptions = (leftOpt) => {
            if (leftOpt === "write") setLeftOption(0);
            else if (leftOpt === "preview") setLeftOption(1);
            if (leftOpt === "guide") setLeftOption(2);
        };
    
    return (
        <>
            <OptionsDiv>
                <div>
                    <div>
                        <OptionsInnerMainDiv>
                            <EditorLeftOptionBar
                                handleLeftOptions={handleLeftOptions} leftOption={leftOption} />
                           <EditorRightOptionBar handleOptions={handleOptions} leftOption={leftOption} 
                            uploadImage={uploadImage}/>
                        </OptionsInnerMainDiv>
                    </div>
                </div>
            </OptionsDiv>
            {leftOption === 0 ? (
                <div>
                    <StoryDiv>
                        <textarea
                            value={storeData}
                            onChange={(e) => {
                                handleChangeData(e);
                            }}
                            placeholder="Tell your story..."
                            id=""
                        ></textarea>
                    </StoryDiv>
                </div>
            ) : leftOption === 1 ? (
                <div>
                    <PreviewDiv>
                        <ReactMarkdown>
                            {storeData ? storeData : "Nothing to preview 🧐"}
                        </ReactMarkdown>
                    </PreviewDiv>
                </div>
            ) : leftOption === 2 ? (
                <Guide />
            ) : null}
        </>
    );
};

const OptionsDiv = styled.div`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #f5f7fa;
    line-height: 1.5;
    border: 1px solid #e4e4e6;

    & > div > div {
        padding: 0.5rem;
        border-radius: 0.25rem;
        z-index: 1;
    }
`;
const OptionsInnerMainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;

    & > :nth-child(1) > :nth-child(2) > :nth-child(1) {
        width: 1.5rem;
        height: 1.5rem;
        margin-bottom: -6px;
    }

    & > div > :hover {
        background-color: rgb(229, 231, 235);
        border-radius: 5px;
    }
    /* background-color: rgba(59, 130, 246, 0.5); */
`;


const StoryDiv = styled.div`
    & > textArea {
        /* height: 123px !important; */
        min-height: 100vh;
        outline: 2px solid transparent;
        outline-offset: 2px;
        line-height: 1.375;
        font-weight: 300;
        padding: 3rem 1rem;
        background-color: transparent;
        font-size: 1.25rem;
        appearance: none;
        resize: none;
        margin-top: 0.5rem;
        margin-bottom: 1.25rem;
        border: none;
        text-align: left;
        width: 100%;
        color: #333333;
    }
`;

const PreviewDiv = styled.div`
    font-size: 1.25rem;
    line-height: 1.8;
    overflow-wrap: break-word;
    word-break: break-word;
    letter-spacing: -0.025em;
    padding: 3rem 1rem;
    width: 100%;
    min-height: 30vh;
    color: #111;
    max-width: 65ch;
    text-align: left;

    & > :nth-child(1) {
        margin-top: 0;
    }
    & > :last-child {
        margin-bottom: 0;
    }
    & ul,
    ol > li {
        padding-left: 1em;
    }
    & ol,
    ul > li {
        padding-left: 1em;
    }
    & img {
        margin-top: 2em;
        margin-bottom: 2em;
        max-width: 100%;
        height: auto;
    }
`;