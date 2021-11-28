import React from "react";
import styles from "./DetailsComponent.module.css";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";

const MainDiv = styled.div`
cursor: pointer;
     & > :nth-child(1),:nth-child(2) {
         width: 1000px;
         height: 300px
     }
`;

function DetailsComponent({ title, body, coverUrl, subTitle, _id }) {
    console.log("title,body,coverUrl:", title, body.length, coverUrl, subTitle, _id);
    let newBody = [];
    for (let i = 0; i < 250; i++) {
        newBody[i] = body[i];
    }
    const history = useHistory();
    const GotoBlog = (_id) => {
        history.push(`/myblog/${_id}`);
    }

    return (
        <MainDiv onClick={() => GotoBlog(_id)}>
            <div>
                <FlexBox>
                    <InnerFlexBox>
                        <ContentDiv>
                            <HeadTitle>{title}</HeadTitle>
                            <SubTitle>{subTitle}</SubTitle>
                            <BodyDiv>
                                <ReactMarkdown>
                                    {newBody.join("")}
                                </ReactMarkdown>
                            </BodyDiv>
                        </ContentDiv>
                    </InnerFlexBox>
                    <HeadFlexSide>
                        <img
                            src={coverUrl}
                            alt="link"
                            width="300px"
                            height="150px"
                        />
                    </HeadFlexSide>
                </FlexBox>
            </div>
        </MainDiv>
    );
}

export default DetailsComponent;

const SubTitle = styled.div`
    margin: 5px 0px 5px 0px;
    padding: 0px;
    font-size: 15px;
    color: gray;
    text-align: left;
`;

const ContentDiv = styled.div`
    width: 100%;
    max-height: 200px;
    
    
`;
const BodyDiv = styled.div`
    text-align: left;
    & > {
        margin: 0;
    }
    & > p {
        text-overflow: ellipsis;
        overflow: hidden;
        // Addition lines for 2 line or multiline ellipsis
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;
        & > img {
            display: none;
        }
    }

    & > h1 {
        margin: 0px;
        text-overflow: ellipsis;
        overflow: hidden;
        // Addition lines for 2 line or multiline ellipsis
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;

        font-weight: 700;
        font-size: 24px;
        word-spacing: 0.5px;
        color: #333333;
    }
    & > h2 {
        margin: 0px;
        text-overflow: ellipsis;
        overflow: hidden;
        // Addition lines for 2 line or multiline ellipsis
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;

        font-weight: 600;
        font-size: 22px;
        word-spacing: 0.5px;
        color: #333333;
    }
    & > h3 {
        margin: 0px;
        text-overflow: ellipsis;
        overflow: hidden;
        // Addition lines for 2 line or multiline ellipsis
        display: -webkit-box !important;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        white-space: normal;

        font-weight: 500;
        font-size: 20px;
        word-spacing: 0.5px;
        color: #333333;
    }
`;

const HeadFlexSide = styled.div`
    
    display: flex;
    align-items: center;
    &>img{
        width:100%;
        height: 100%;
    }
`;

const FlexBox = styled.div`
    display: flex;
    max-height: 200px;
    padding: 1rem;
    column-gap: 20px;

    overflow: hidden;
    width: 100%;
    height: 300px;
    margin: auto;
    text-align: left;
    //   padding: 20px 20px 20px 20px;
    justify-content: space-between;
`;
const InnerFlexBox = styled.div`
    width: 80%;
    height: 300px;
    text-align: left;
    justify-content: space-between;

    
`;

const HeadTitle = styled.div`
    margin: 0px;
    padding: 0px;
    text-align: left;
    font-weight: 700;
    font-size: 25px;
    word-spacing: 0.5px;
    color: #333333;
`;
