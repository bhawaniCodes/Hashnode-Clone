import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";

const Container = styled.div`
    width: 30%;
`;
const MyHashNodeBlog = styled.div`
    border: 1px solid #e5e7eb;
    background: #ffffff;
    border-radius: 0.5rem;
    padding: 2rem;

    & > div {
        display: flex;
        margin-bottom: 5px;
        margin-top: 0px;
    }
    & > div > p {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    & > div > p:first-child {
        color: #828282;
        width: 4.5rem;
        font-size: 1.1rem;
    }

    & > div > p:nth-child(2) {
        font-weight: 600;
        font-size: 1.1rem;
    }
`;

const Button = styled.div`
    border: 1px solid #4580ff;
    border-radius: 0.5rem;
    border-width: 1px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    display: flex;
    align-items: center;
    width: 140px;

    & > span {
        font-size: 1rem;
        color: #4580ff;
        margin-left: 5px;
    }
`;

const FollowDiv = styled.div`
    border: 1px solid #e5e7eb;
    height: 100px;
    background: #ffffff;
    border-radius: 0.5rem;
    padding-top: 5px;
    padding-left: 2rem;
    margin-top: 15px;
    display: flex;
    justify-content: space-evenly;

    & h4 {
        margin-bottom: 5px;
        font-size: 1rem;
        color: #61616b;
    }

    & p {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 700;
        margin-top: 0px;
    }
`;

function BottomLeftSection() {
    const [userData, setUserData] = useState({});
    const id = "6183abda180f196b316a3e52";

    const getData = async () => {
        const res = await axios.get(`http://locahost:4455/users/${id}`);
        setUserData(res.data);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <Container>
            <MyHashNodeBlog>
                <div>
                    <p>Location:</p>
                    <p>Bareilly, India</p>
                </div>
                <div>
                    <p>Joined:</p>
                    <p>Bareilly, India</p>
                </div>
                <div>
                    <p>Email:</p>
                    <p>Bareilly, India</p>
                </div>
            </MyHashNodeBlog>
            <FollowDiv>
                <div>
                    <h4>Followers</h4>
                    <p>0</p>
                </div>
                <div>
                    <h4>Following</h4>
                    <p>0</p>
                </div>
                <div>
                    <h4>Appreciations</h4>
                    <p>0</p>
                </div>
            </FollowDiv>
        </Container>
    )
}

export { BottomLeftSection };