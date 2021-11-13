import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GrImage, GrClose } from "react-icons/gr";
import { BiText } from "react-icons/bi";
import { GiVerticalFlip } from "react-icons/gi";


export const EditorTitle = (
    { coverImage, uploadImage, handleLiveData, titleData, subTitleData, handleRemoveImage, setCoverImage}
) => {
    const [addSubTitle, setAddSubTitle] = useState(false);
    const [moveCoverImage, setMoveCoverImage] = useState(false);

    return (
        <>
            <AddCoverAndTitleDiv>
                {!coverImage ? (
                    <label>
                        <GrImage />
                        <p>Add cover photo</p>
                        <input
                            type="file"
                            onChange={(e) => uploadImage(e, "cover")}
                        />
                    </label>
                ) : null}

                {!addSubTitle ? (
                    <label
                        onClick={() => {
                            setAddSubTitle(!addSubTitle);
                        }}
                    >
                        <BiText />
                        <p>Add subtitle</p>
                    </label>
                ) : null}
            </AddCoverAndTitleDiv>
            {coverImage && !moveCoverImage ? (
                <CoverImageDiv>
                    <div>
                        <img src={coverImage} alt="" />
                        <div
                            onClick={() => {
                                setMoveCoverImage(!moveCoverImage);
                            }}
                        >
                            <GiVerticalFlip />
                        </div>
                        <div onClick={handleRemoveImage}>
                            <GrClose />
                        </div>
                    </div>
                </CoverImageDiv>
            ) : null}
            <TitleDiv>
                <textarea
                    onChange={(e) => handleLiveData(e, "title")}
                    value={titleData}
                    placeholder="Title..."
                    id=""
                    cols="30"
                    rows="10"
                ></textarea>
            </TitleDiv>
            {addSubTitle ? (
                <SubTitleDiv>
                    <textarea
                        onChange={(e) => handleLiveData(e, "subTitle")}
                        value={subTitleData}
                        placeholder="Enter subtitle (Optional)"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                    <div
                        onClick={() => {
                            setAddSubTitle(!addSubTitle);
                        }}
                    >
                        <GrClose />
                    </div>
                </SubTitleDiv>
            ) : null}
            {coverImage && moveCoverImage ? (
                <CoverImageDiv>
                    <div>
                        <img src={coverImage} alt="" />
                        <div
                            onClick={() => {
                                setMoveCoverImage(!moveCoverImage);
                            }}
                        >
                            <GiVerticalFlip />
                        </div>
                        <div
                            onClick={() => {
                                setCoverImage("");
                            }}
                        >
                            <GrClose />
                        </div>
                    </div>
                </CoverImageDiv>
            ) : null}
        </>
    );
};

const AddCoverAndTitleDiv = styled.div`
    display: flex;
    flex-direction: row;
    & > label {
        opacity: 0.5;
        border-radius: 0.5rem;
        border: none;
        padding: 0.25rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 500;
        line-height: 1.625;
        color: rgb(55, 65, 81);
        background-color: #ffffff;
        margin-bottom: 40px;
        /* transition-property: background-color, border-color, color, fill, stroke; */
        /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); */

        &:hover {
            color: black;
            opacity: 1;
            background-color: rgb(229, 231, 235);
        }
        & > :nth-child(1) {
            display: inline;
            margin-bottom: -5px;
            font-size: 1.5rem;
            opacity: 0.75;

            &:hover {
                opacity: 1;
            }
        }
        & > :nth-child(2) {
            margin-left: 8px;
            display: inline;
        }
        & > :nth-child(3) {
            visibility: hidden;
            width: 0px;
        }
    }
`;


const CoverImageDiv = styled.div`
    margin-bottom: 1.25rem;

    & > div {
        display: flex;
        position: relative;

        & > :nth-child(2) {
            border: 1px solid rgba(51, 51, 51, 0.288);
            margin-right: 0.4rem;
            padding-top: 1rem !important;
            padding: 0.5rem;
            width: 2rem;
            height: 1.5rem;
            cursor: pointer;
            color: rgb(51, 51, 51);
            position: absolute;
            top: 20px;
            right: 80px;
            background-color: white;
            opacity: 0.75;
            &:hover {
                color: rgb(0, 0, 0);
                border-radius: 5px;
                opacity: 1;
            }
        }
        & > :nth-child(3) {
            border: 1px solid rgba(51, 51, 51, 0.288);
            margin-right: 0.4rem;
            padding-top: 1rem !important;
            padding: 0.5rem;
            width: 2rem;
            height: 1.5rem;
            cursor: pointer;
            color: rgb(51, 51, 51);
            position: absolute;
            top: 20px;
            right: 20px;
            background-color: white;
            opacity: 0.75;
            &:hover {
                color: rgb(0, 0, 0);
                border-radius: 5px;
                opacity: 1;
            }
        }

        & img {
            width: 100%;
            border-radius: 0.5rem;
        }
    }
`;

const TitleDiv = styled.div`
    & > textArea {
        height: 82px !important;
        outline: 2px solid transparent;
        outline-offset: 2px;
        line-height: 1.375;
        font-weight: 700;
        padding-left: 1rem;
        padding-right: 1rem;
        background-color: transparent;
        font-size: 1.875rem;
        appearance: none;
        resize: none;
        margin-top: 0.5rem;
        margin-bottom: 1.25rem;
        color: rgb(51, 51, 51);
        border: none;
        text-align: left;
        width: 100%;

        &::-webkit-input-placeholder {
            color: rgb(158, 158, 158);
        }
    }
`;
const SubTitleDiv = styled.div`
    display: flex;
    margin-top: -1.25rem;
    margin-bottom: 1rem;
    & > textArea {
        height: 66px !important;
        outline: 2px solid transparent;
        outline-offset: 2px;
        line-height: 1.375;
        font-weight: 500;
        padding-left: 1rem;
        background-color: transparent;
        font-size: 1.5rem;
        appearance: none;
        resize: none;
        padding-right: 2.5rem;
        color: rgb(97, 97, 97);
        border: none;
        text-align: left;
        width: 100%;

        &::-webkit-input-placeholder {
            color: rgb(158, 158, 158);
        }
    }
    & > :nth-child(2) {
        margin-right: 0.4rem;
        padding-top: 0.5rem;
        width: 2rem;
        height: 1.5rem;
        cursor: pointer;
        &:hover {
            background-color: rgb(229, 231, 235);
            border-radius: 5px;
        }
    }
`;