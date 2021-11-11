import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 50%;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 2rem;
    margin-top: 25px;

    & > label {
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 600;
        margin-bottom: 8px;
    }

    & > input {
        border-radius: 0.5rem;
        height: 55px;
        border: none;
        border: 1px solid #e5e7eb;
        font-size: 100%;
        padding-left: 1rem;
    }

    & > input:focus {
        outline: none;
        outline: 1px solid #2962ff;
    }
    & > img {
        width: 8rem;
        border-radius: 4rem;
        box-shadow: 3px 3xp #000000;
    }

    & > button {
        position: absolute;
        width: 2rem;
        height: 2rem;
        border-radius: 1rem;
        border: none;
        cursor: pointer;
        background: #ffffff;
        border: 1px solid #e5e7eb;
        margin-left: 6rem;
        margin-top: 30px;
    }
    & > button > svg {
        width: 1rem;
   
    }
    & > div {
        width: 100%;
        height: 100px;
        border: 2px solid #e5e7eb;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.5);
        border-radius: 0.2rem;
    }

    & > div > svg {
        width: 2.5rem;
        margin-top: 10px;
        fill: #374151;
    }

    & > div > p {
        font-size: .75rem;
        font-weight: 600;
        color: #374151;
    }

    & > textarea {
        max-width:100%;
        height: 55px;
        border: none;
        border: 1px solid #e5e7eb;
        border-radius: 0.3rem;
        font-size: 1.15rem;
        font-family: inherit;
        padding-left: 1rem;
        padding-top: 1rem;
    }

    & > textarea:focus {
        outline: none;
        outline: 1px solid #2962ff;
    }
    & > span {
        border-radius: 0.5rem;
        box-shadow: 2px 2px rgba(0,0,0,0.1);
        z-index: 10;
        position: absolute;
        margin-top: 83px;
        background: white;
        width: 17rem;
    }

    & > span > div {
        width: 95%;
        padding: 0.5rem;
        max-height: 150px;
    }
    
    & > span > div:hover {
        background-color: #e5e7eb;
        cursor: pointer;
    }
`;

const Heading = styled.p`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    margin-left: 2rem;
`;

const BorderButton = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1.125rem;
    line-height: 1.75rem;
    background: transparent;
    border: none;
    border: 1px solid #2962ff;
    color: #2962ff;
    margin-left: 2rem;
    margin-top: 40px;
    margin-bottom: 40px;
    border-radius: 0.5rem;
    width: 4rem;

    &:hover {
        background: rgba(41,98,255,0.1);
        cursor: pointer;
    }
`

const SkillDisplay = styled.div`
    max-width: 100%;
    margin-left: 2rem;

    & > div {
        display: inline-flex;
        color: #2962ff;
        border: 1px solid #2962ff;
        border-radius: 0.5rem;
        margin-bottom: 0px;
        margin-top: 15px;
        margin-left: 10px;
        padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    }

    & > div > p {
        margin: 0;
    }

    & > div:hover {
        background: rgba(41,98,255,0.1);
        cursor: pointer;
    }

    & > div > svg {
        width: 0.7rem;
        fill: #2962ff;
        margin-left: 0.5rem;
    }
`;

function LeftFormSection({addUserData, updateUser ,savedSkill,setSavedSkill,userData}) {
    const skillArray = ["Javascript", "NodeJs", "Reactjs", "Java", "Express", "Typescript", "C", "C++", "Python", "Go", "Mongoose", "Springboot", "Git", "SQL", "MongoDB"];
    const [skill, setSkill] = useState("");
    const [displaySkill, setDisplaySkill] = useState([]);
   
    const handleClick = (e) => {
        setSkill(e.target.value);
        const newArray = [];
        if (skill === "") {
            setDisplaySkill([]);
            return;
        }
        skillArray.forEach((e) => {
            if (e.toLowerCase().startsWith(skill.toLowerCase()))
                newArray.push(e);
        })
        setDisplaySkill(newArray);
    }

    const addToSkill = (e) => {
        savedSkill.push(e);
        setSavedSkill(savedSkill);
        setSkill("");
        setDisplaySkill([]);
    }

    const updateSkill = (str) => {
        const newArray = savedSkill.filter((e) => e !== str)
        setSavedSkill(newArray);
    }
    
    return (
        <Container>
            <Heading>Basic Info</Heading>
            <InputBox>
                <label>Full Name</label>
                <input value={userData.name}/>
            </InputBox>
            <InputBox>
                <label>Profile Tagline</label>
                <input placeholder="Software Developer @ ..." name="tagline" onChange={addUserData} value={userData.tagline}/>
            </InputBox>
               <InputBox>
                <label>Profile Photo</label>
                <img src="https://via.placeholder.com/50" alt="profile"/>
                <button>
                    <svg class="w-4 h-4 fill-current" viewBox="0 0 448 512"><path d="M296 432h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zm-160 0h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8zM440 64H336l-33.6-44.8A48 48 0 00264 0h-80a48 48 0 00-38.4 19.2L112 64H8a8 8 0 00-8 8v16a8 8 0 008 8h24v368a48 48 0 0048 48h288a48 48 0 0048-48V96h24a8 8 0 008-8V72a8 8 0 00-8-8zM171.2 38.4A16.1 16.1 0 01184 32h80a16.1 16.1 0 0112.8 6.4L296 64H152zM384 464a16 16 0 01-16 16H80a16 16 0 01-16-16V96h320zm-168-32h16a8 8 0 008-8V152a8 8 0 00-8-8h-16a8 8 0 00-8 8v272a8 8 0 008 8z"></path></svg>
                </button>
            </InputBox>
            <InputBox>
                <label>Cover Image</label>
                <div>
                    <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"></path></svg>
                    <p>UPLOAD PHOTO</p>
                </div>
            </InputBox>
            <InputBox>
                <label>Location</label>
                <input placeholder="Detroit, USA" name="location" onChange={addUserData} value={userData.location}/>
            </InputBox>
            <Heading>About You</Heading>
            <InputBox>
                <label>Available for</label>
                <textarea type="text" placeholder="I am availble for mentoring, ..." name="about" onChange={addUserData} value={userData.about}></textarea>
            </InputBox>
            <InputBox>
                <label>Skills</label>
                <input onChange={handleClick} value={skill} placeholder="Type Technologies Here" />
                <span>
                    {skill === "" ? <></> : <div onClick={() => addToSkill(skill)}>{skill}</div>}
                    {
                        skill === "" ? <></> :
                        displaySkill.map((e,i) => 
                            <div key={i} onClick={() => addToSkill(e)}>
                                {e} 
                            </div>
                        )
                    }
                </span>
            </InputBox>
            <SkillDisplay>
                {
                    savedSkill.map((e,i) =>
                        <div key={i}>
                            <p>{e}</p>
                            <svg onClick={() => updateSkill(e)} viewBox="0 0 320 512"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>   
                        </div>)
                }
            </SkillDisplay>
            <BorderButton onClick={updateUser}>Update</BorderButton>
        </Container>
    );
}

export { LeftFormSection };