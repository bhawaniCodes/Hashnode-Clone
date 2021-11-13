import React from "react";
import styles from "./DetailsComponent.module.css";
import ReactMarkdown from "react-markdown";
import styled from "styled-components";

const MainDiv = styled.div`
    & > :nth-child(1) {
        width: 700px;
    }
`;

function DetailsComponent({ title, body, coverUrl, subTitle }) {
    console.log("title,body,coverUrl:", title, body, coverUrl, subTitle);
    return (
        <MainDiv>
            <div>
                <FlexBox>
                    <InnerFlexBox>
                        <ContentDiv>
                            <HeadTitle>{title}</HeadTitle>
                            <SubTitle>{subTitle}</SubTitle>
                            <BodyDiv>
                                <ReactMarkdown>{body}</ReactMarkdown>
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

            {/* <MainDiv className={styles.mainCont}>
                <div className={styles.mainContInside}>
                    <h2>{title}</h2>
                    <ReactMarkdown>{body}</ReactMarkdown>
                </div>
                <div>
                    <img
                        className={styles.img1}
                        src={coverUrl}
                        width="345"
                        height="160"
                        alt="mern"
                    />
                </div>
            </MainDiv> */}
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
    max-height: 180px;
    white-space: wrap;
    overflow: hidden;
    
`;
const BodyDiv = styled.div`
    & > {
        margin: 0;
    }
    & > p {
        text-overflow: ellipsis;
    }

    & > h1 {
        margin: 0px;
        font-size: 1.4rem;
    }
    & > h2 {
        margin: 0px;
        font-size: 1.2rem;
    }
    & > h3 {
        margin: 0px;
        font-size: 1rem;
    }
`;

const HeadFlexSide = styled.div`
    display: flex;
    align-items: center;
`;

const FlexBox = styled.div`
    display: flex;
    border: 1px solid black;
    max-height: 200px;
    padding: 1rem;

    overflow: hidden;
    width: 100%;
    height: auto;
    margin: auto;
    margin-top: 50px;
    text-align: left;
    //   padding: 20px 20px 20px 20px;
    justify-content: space-between;
`;
const InnerFlexBox = styled.div`
    width: 55%;
    height: auto;
    text-align: left;
    justify-content: space-between;

    
`;

const HeadTitle = styled.div`
    margin: 0px;
    padding: 0px;
    text-align: left;
    font-weight: 600;
    font-size: 24px;
    word-spacing: 0.5px;
    color: #333333;
`;
