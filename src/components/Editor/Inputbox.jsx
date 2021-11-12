import React, { useEffect, useState } from "react";
import styled from "styled-components";

const skillArray = [
    "Javascript",
    "NodeJs",
    "Reactjs",
    "Java",
    "Express",
    "Typescript",
    "C",
    "C++",
    "Python",
    "Go",
    "Mongoose",
    "Springboot",
    "Git",
    "SQL",
    "MongoDB",
];

export const Inputbox = () => {
    const [skill, setSkill] = useState("");
    const [displaySkill, setDisplaySkill] = useState([]);
    const [savedSkill, setSavedSkill] = useState([]);


        useEffect(() => {
            if (localStorage.getItem("draft")) {
                let storedDraft = JSON.parse(localStorage.getItem("draft"));
                setSavedSkill(storedDraft.tags ? storedDraft.tags: []);
            }
        }, []);


    const updateTagLocally = (countNames, counts) => {
        let storedDraft = JSON.parse(localStorage.getItem("draft"));
        localStorage.setItem(
            "draft",
            JSON.stringify({
                ...storedDraft,
                [countNames]: counts,
            })
        );
    };

    const addToSkill = (e) => {
        savedSkill.push(e);
        setSavedSkill(savedSkill);
        updateTagLocally("tags", savedSkill);
        setSkill("");
        setDisplaySkill([]);
    };

    const handleRemoveSavedSkill = (e, i) => {
        const updatedSkill = savedSkill.filter((skl, idx) => idx !== i);
        setSavedSkill(updatedSkill);
        updateTagLocally("tags", updatedSkill);
        console.log("e", e, i, savedSkill);
    };

    const handleChange = (e) => {
        setSkill(e.target.value);
        const newArray = [];
        if (skill === "") {
            setDisplaySkill([]);
            return;
        }
        skillArray.forEach((e) => {
            if (e.toLowerCase().startsWith(skill.toLowerCase()))
                newArray.push(e);
        });
        setDisplaySkill(newArray);
    };
    return (
        <>
            <h3>Select tags</h3>
            <SelectTagInput>
                <div>
                    <input
                        onChange={handleChange}
                        value={skill}
                        placeholder="Type Technologies Here"
                    />
                </div>
                <span>
                    {skill === "" ? (
                        <></>
                    ) : (
                        <div onClick={() => addToSkill(skill)}>{skill}</div>
                    )}
                    {skill === "" ? (
                        <></>
                    ) : (
                        displaySkill.map((e, i) => (
                            <div key={ i} onClick={() => addToSkill(e)}>{e}</div>
                        ))
                    )}
                </span>
            </SelectTagInput>
            <SkillDisplay>
                {savedSkill?.map((e, i) => (
                    <div key={i}>
                        <p>{e}</p>
                        <svg
                            onClick={(e) => handleRemoveSavedSkill(e, i)}
                            viewBox="0 0 320 512"
                        >
                            <path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path>
                        </svg>
                    </div>
                ))}
            </SkillDisplay>
        </>
    );
};

const SelectTagInput = styled.div`
    & > :nth-child(1) {
        margin-bottom: 0.5rem;
        box-sizing: border-box;

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
    & > span {
        border-radius: 0.5rem;
        box-shadow: 2px 2px rgba(0, 0, 0, 0.1);
        z-index: 10;
        position: absolute;
        background: white;
        width: 21rem;
    }

    & > span > div {
        width: 95%;
        padding: 0.5rem;
        max-height: 150px;
        border: 1px solid rgb(229, 231, 235);
        border-radius: 0.5rem;
    }

    & > span > div:hover {
        background-color: #e5e7eb;
        cursor: pointer;
    }
`;

const SkillDisplay = styled.div`
    max-width: 100%;

    & > div {
        display: inline-flex;
        color: #2962ff;
        border: 1px solid #2962ff;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
        margin-right: 0.5rem;
        padding: 0.2rem 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }

    & > div > p {
        margin: 0;
    }

    & > div:hover {
        background: rgba(41, 98, 255, 0.1);
        cursor: pointer;
    }

    & > div > svg {
        width: 0.7rem;
        fill: #2962ff;
        margin-left: 0.5rem;
    }
`;
