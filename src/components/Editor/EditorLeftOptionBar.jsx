import React from "react";
import styled from "styled-components";
import { BsPencil } from "react-icons/bs";
import { TiEyeOutline } from "react-icons/ti";
import { RiFootballFill } from "react-icons/ri";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const clickedColor = {
    color: "#2B63FF",
};


export const EditorLeftOptionBar = ({
    leftOption,
    handleLeftOptions,
}) => {

    return (
        <>
            <div>
                <Tippy placement="bottom" content="Write Markdown">
                    <OptionLeftButtons
                        onClick={(e) => handleLeftOptions("write")}
                        style={leftOption === 0 ? clickedColor : null}
                    >
                        <BsPencil />
                        <p>Write</p>
                    </OptionLeftButtons>
                </Tippy>
                <Tippy placement="bottom" content="Preview Markdown">
                    <OptionLeftButtons
                        onClick={(e) => handleLeftOptions("preview")}
                        style={leftOption === 1 ? clickedColor : null}
                    >
                        <TiEyeOutline />
                        <p>Preview</p>
                    </OptionLeftButtons>
                </Tippy>
                <Tippy placement="bottom" content="Guide">
                    <OptionLeftButtons
                        onClick={(e) => handleLeftOptions("guide")}
                        style={leftOption === 2 ? clickedColor : null}
                    >
                        <RiFootballFill />
                        <p>Guide</p>
                    </OptionLeftButtons>
                </Tippy>
            </div>
        </>
    );
};
const OptionLeftButtons = styled.button`
    border-radius: 0.5 rem;
    border-width: 1 px;
    border-color: transparent;
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    cursor: pointer;
    background-color: transparent;
    color: #5c646e;
    /* color: rgb(41,98,255); */

    & :hover {
        background-color: rgb(229, 231, 235);
    }
    & > :nth-child(2) {
        display: inline;
        margin-left: 8px;
    }

    & > :nth-child(1) {
        margin-bottom: -2px;
        width: 1rem;
        height: 1rem;
    }
`;
