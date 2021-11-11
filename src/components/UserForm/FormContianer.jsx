import styled from "styled-components";
import { LeftFormSection } from "./LeftFormSection";
import { RightFormSection } from "./RightFormSection";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    width: 49.5rem;
    border: 1px solid #e5e7eb;
    background: #ffffff;
    border-radius: 0.5rem;
    margin-left: 1.5rem;
    display: flex;
`;

function FormContainer() {
    const [savedSkill, setSavedSkill] = useState([]);
    const id = "6183abda180f196b316a3e52";
    const [social, setSocial] = useState({});
    
    const addSocialData = (e) => {
        const { value, name } = e.target;
        setSocial({
            ...social,
            [name]: value
        })
        setUserData({
            ...userData,
            social:social
        })
    }
    
    const [userData, setUserData] = useState({});

    const getUser = async () => {
        const res = await axios.get(`http://localhost:4455/users/${id}`);
        setUserData(res.data);
        setSocial(res.data.social);
        setSavedSkill(res.data.skill);
    }

    useEffect(() => {
        getUser();
    }, [])

    const addUserData = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]:value
        })
    }

    const updateUser = async () => {
        userData.skill = savedSkill;
        await axios.patch(`http://localhost:4455/users/${id}`, userData);
        getUser();
    }

    return (
        <Container>
            <LeftFormSection addUserData={addUserData} updateUser={updateUser} savedSkill={savedSkill} setSavedSkill={setSavedSkill} userData={userData}/>
            <RightFormSection addSocialData={addSocialData} social={social}/>
        </Container>
    );
}

export { FormContainer };