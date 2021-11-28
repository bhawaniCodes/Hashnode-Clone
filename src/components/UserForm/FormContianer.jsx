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
    const [social, setSocial] = useState({
        facebook: "",
        twitter: "",
        linkdin: "",
        websiteUrl: "",
        github: "",
    });
    const [coverImage, setCoverImage] = useState("");
    const [profileImage, setProfileImage] = useState(
        "https://via.placeholder.com/50"
    );
    console.log("coverImage:", coverImage);
    console.log("profileImage:", profileImage);

    const token = JSON.parse(localStorage.getItem("user"));

    const addSocialData = (e) => {
        const { value, name } = e.target;
        setSocial({
            ...social,
            [name]: value,
        });
        setUserData({
            ...userData,
            social: social,
        });
    };
    console.log(token);


    const [userData, setUserData] = useState({
        name: "",
        avatar: profileImage,
        coverImage: coverImage,
        email: "",
        password: "",
        tagline: "",
        location: "",
        about: "",
        blogIds: [],
        skill: [],
        social: {
            facebook: "",
            twitter: "",
            linkdin: "",
            websiteUrl: "",
            github: "",
        },
    });



    const getUser = async () => {
        const res = await axios.get(`${process.env.REACT_APP_COMMON_URL}/users`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        setUserData(res.data);
        setSocial(
            res.data.social
                ? res.data.social
                : {
                      facebook: "",
                      twitter: "",
                      linkdin: "",
                      websiteUrl: "",
                      github: "",
                  }
        );
        setSavedSkill(res.data.skill);
    };

    useEffect(() => {
        getUser();
    }, []);

    const addUserData = (e) => {
        const { value, name } = e.target;
        setUserData({
            ...userData,
            [name]: value,
        });
    };

    const updateUser = async () => {
        userData.skill = savedSkill;
        userData.avatar = profileImage;
        userData.coverImage = coverImage
        await axios.patch(
            `${process.env.REACT_APP_COMMON_URL}/users`,
            userData,
            {
                headers: {
                    authorization: `Bearer ${token}`,
                },
            }
        );
        getUser();
    };

    return (
        <Container>
            <LeftFormSection
                addUserData={addUserData}
                updateUser={updateUser}
                savedSkill={savedSkill}
                setSavedSkill={setSavedSkill}
                userData={userData}
                coverImage={coverImage}
                setCoverImage={setCoverImage}
                profileImage={profileImage}
                setProfileImage={setProfileImage}
            />
            <RightFormSection addSocialData={addSocialData} social={social} />
        </Container>
    );
}

export { FormContainer };
