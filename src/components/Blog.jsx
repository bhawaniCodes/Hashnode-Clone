import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
const commonUrl = process.env.REACT_APP_COMMON_URL;

function Blog() {
    const [data, setData] = React.useState({});
    const [like, setLike] = React.useState(0);
    console.log("like:", like);
    const { id } = useParams();

    async function getBlogs() {
        const token = JSON.parse(localStorage.getItem("user"));
        const data = await axios.get(`${commonUrl}/blogs/${id}`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        setData(data.data.blog);
        setLike(data.data.blog.like || 0);
    }

    const handleUpdateLike = async () => {
        const token = JSON.parse(localStorage.getItem("user"));
        const data = await axios.patch(`${commonUrl}/blogs/${id}`, {
            like: like + 1,
        });
        setLike(data.data.like || 0);
    };

    useEffect(() => {
        getBlogs();
    }, []);

    let email = JSON.parse(localStorage.getItem("email"));
    let arr = email.split("." || "@");
    let name = arr[0];
    return (
        <>
            <MasterDiv>
                <MainDiv>
                    <NavTop>
                        <div>
                            <Link to="/">
                                <h2 style={{ color: "black" }}>{name}</h2>
                            </Link>
                        </div>
                        <ButtonsDiv>
                            <Buttons>
                                <svg
                                    viewBox="0 0 200 200"
                                    fill="black"
                                    width="25px"
                                >
                                    <g clipPath="url(#clip0)">
                                        <path d="M186.804 176.609l-44.092-44.091a4.054 4.054 0 00-2.905-1.197h-3.521c11.724-12.68 18.902-29.599 18.902-48.227C155.188 43.82 123.366 12 84.094 12 44.82 12 13 43.821 13 83.094c0 39.272 31.821 71.094 71.094 71.094 18.628 0 35.547-7.178 48.227-18.868v3.487c0 1.093.445 2.119 1.197 2.905l44.091 44.092a4.107 4.107 0 005.811 0l3.384-3.384a4.107 4.107 0 000-5.811zM84.094 143.25c-33.257 0-60.156-26.899-60.156-60.156s26.899-60.156 60.156-60.156 60.156 26.899 60.156 60.156-26.899 60.156-60.156 60.156z"></path>
                                    </g>
                                    <defs>
                                        <clipPath>
                                            <path
                                                transform="translate(13 12)"
                                                d="M0 0h175v175H0z"
                                            ></path>
                                        </clipPath>
                                    </defs>
                                </svg>
                            </Buttons>
                            <Buttons>
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="black"
                                    width="25px"
                                >
                                    <path d="M448.964 365.617C348.188 384.809 255.14 307.765 255.14 205.419c0-58.893 31.561-112.832 82.574-141.862 25.83-14.7 19.333-53.859-10.015-59.28A258.114 258.114 0 00280.947 0c-141.334 0-256 114.546-256 256 0 141.334 114.547 256 256 256 78.931 0 151.079-35.924 198.85-94.783 18.846-23.22-1.706-57.149-30.833-51.6zM280.947 480c-123.712 0-224-100.288-224-224s100.288-224 224-224c13.984 0 27.665 1.294 40.94 3.745-58.972 33.56-98.747 96.969-98.747 169.674 0 122.606 111.613 214.523 231.81 191.632C413.881 447.653 351.196 480 280.947 480z"></path>
                                </svg>
                            </Buttons>
                            <Buttons>
                                <svg
                                    viewBox="0 0 512 512"
                                    fill="black"
                                    width="25px"
                                >
                                    <path d="M502.63 214.63l-45.25-45.26c-6-6-14.14-9.37-22.63-9.37H384V80c0-26.47-21.53-48-48-48H176c-26.47 0-48 21.53-48 48v80H77.25c-8.49 0-16.62 3.37-22.63 9.37L9.37 214.63c-6 6-9.37 14.14-9.37 22.63V448c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V237.25c0-8.48-3.37-16.62-9.37-22.62zM160 80c0-8.83 7.19-16 16-16h160c8.81 0 16 7.17 16 16v80H160V80zm320 368H32v-96h96v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h192v24c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-24h96v96zm-96-128v-24c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24H160v-24c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v24H32v-82.75L77.25 192h357.49L480 237.25V320h-96z"></path>
                                </svg>
                            </Buttons>
                            <UserButton>
                                <Image
                                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1629282644342/VGWU-WK52.png?w=200&h=200&fit=crop&crop=faces&auto=compress&auto=compress"
                                    alt="userImage"
                                />
                            </UserButton>
                        </ButtonsDiv>
                    </NavTop>
                    <ButtonsInnerDiv>
                        <ButtonsDiv>
                            <Link to="/myBlog">
                                <Button>Home</Button>
                            </Link>
                            <Button>Badges</Button>
                        </ButtonsDiv>
                        <ButtonsDiv>
                            <Button>
                                <svg
                                    viewBox="0 0 200 200"
                                    fill="gray"
                                    width="25px"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipPath="evenodd"
                                        d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"
                                    ></path>
                                </svg>
                            </Button>
                            <Button>
                                <svg
                                    viewBox="0 0 448 512"
                                    fill="gray"
                                    width="25px"
                                >
                                    <path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"></path>
                                </svg>
                            </Button>
                        </ButtonsDiv>
                    </ButtonsInnerDiv>
                </MainDiv>
                <AdjustDiv>
                    <ButtonsDiv>
                        <BlogDiv>
                            <MainContentDiv>
                                <img src={data.coverUrl} alt="" />
                                <h1>{data.title}</h1>
                                <div>
                                    <FlexBox>
                                        <HeadFlexSide>
                                            <img
                                                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1629282644342/VGWU-WK52.png?w=200&h=200&fit=crop&crop=faces&auto=compress&auto=compress"
                                                alt="link"
                                                width="50px"
                                                height="50px"
                                            />
                                        </HeadFlexSide>
                                        <InnerFlexBox>
                                            <ContentDiv>
                                                <HeadTitle>
                                                    {data.email}
                                                </HeadTitle>
                                                <SubTitle>
                                                    {data.email}
                                                </SubTitle>
                                            </ContentDiv>
                                        </InnerFlexBox>
                                    </FlexBox>
                                </div>
                                <h3>{data.subTitle}</h3>
                                <ReactMarkdown>{data.body}</ReactMarkdown>
                                <ButtonsDiv>
                                    {data?.tags?.map((e) => (
                                        <TagDiv>#{e}</TagDiv>
                                    ))}
                                </ButtonsDiv>

                                <CommentFlexBox>
                                    <HeadFlexSide>
                                        <h4>Comments</h4>
                                    </HeadFlexSide>
                                    <InnerFlexBox>
                                        <ContentDiv>
                                            <NewBtn>Write Someting +</NewBtn>
                                        </ContentDiv>
                                    </InnerFlexBox>
                                </CommentFlexBox>
                            </MainContentDiv>
                        </BlogDiv>
                        <IconDiv>
                            <NewDiv>
                                <div onClick={handleUpdateLike}>
                                    <img
                                        src="https://mayurjk.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1594643688456%2FnznpsvvJs.png%3Fh%3D64%26w%3D64%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=64&q=75"
                                        alt="thumb"
                                        width="25px"
                                    />
                                </div>
                                <div>
                                    <span>{like || 0}</span>
                                </div>
                            </NewDiv>
                            <div>
                                <svg
                                    width="25px"
                                    fill="gray"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M280 272H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm96-96H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h240c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 384c-28.3 0-56.3-4.3-83.2-12.8l-15.2-4.8-13 9.2c-23 16.3-58.5 35.3-102.6 39.6 12-15.1 29.8-40.4 40.8-69.6l7.1-18.7-13.7-14.6C47.3 313.7 32 277.6 32 240c0-97 100.5-176 224-176s224 79 224 176-100.5 176-224 176z"></path>
                                </svg>
                            </div>

                            <div>
                                <svg
                                    width="25px"
                                    fill="gray"
                                    viewBox="0 0 384 512"
                                >
                                    <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"></path>
                                </svg>
                            </div>
                            <div>
                                <svg
                                    width="25px"
                                    fill="gray"
                                    viewBox="0 0 512 512"
                                >
                                    <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                </svg>
                            </div>
                            <div>
                                <svg
                                    width="25px"
                                    fill="gray"
                                    viewBox="0 0 500 500"
                                >
                                    <path
                                        d="M432.31 135.261h-47.672a17.595 17.595 0 0 0-12.442 30.039c3.3 3.3 7.775 5.154 12.442 5.154h30.075v294.353H86.193V170.454h30.085a17.595 17.595 0 0 0 12.442-30.039 17.595 17.595 0 0 0-12.442-5.154H68.596A17.61 17.61 0 0 0 51 152.858v329.546A17.597 17.597 0 0 0 68.596 500H432.31a17.586 17.586 0 0 0 17.596-17.596V152.858a17.597 17.597 0 0 0-17.596-17.597Z"
                                        fill="inherit"
                                    ></path>
                                    <path
                                        d="M204.521 95.101a17.553 17.553 0 0 0 12.81-5.53l26.083-27.652v206.13a17.595 17.595 0 0 0 30.039 12.442c3.3-3.3 5.154-7.775 5.154-12.442V61.809L304.75 89.59a17.609 17.609 0 0 0 12.332 5.711 17.6 17.6 0 0 0 16.733-10.43 17.61 17.61 0 0 0 .301-13.588 17.603 17.603 0 0 0-3.755-5.825L274.997 6.717a18.147 18.147 0 0 0-1.809-2.011A17.51 17.51 0 0 0 263.223.06h-.503l-.955-.06h-2.283c-.271 0-.543.06-.814.09-.272.03-.593.08-.885.141l-.845.171-.824.221c-.282.08-.553.161-.825.262-.271.1-.543.18-.804.291l-.784.332-.785.382-.744.413-.744.442-.724.503-.663.503c-.252.2-.493.402-.724.613l-.413.352-.17.18c-.232.222-.443.453-.664.695-.221.241-.372.392-.543.593-.171.201-.302.382-.453.583L191.771 65.49a17.59 17.59 0 0 0-3.321 18.98 17.588 17.588 0 0 0 16.071 10.632Z"
                                        fill="inherit"
                                    ></path>
                                </svg>
                            </div>
                        </IconDiv>
                    </ButtonsDiv>
                </AdjustDiv>
            </MasterDiv>
        </>
    );
}

export default Blog;

// let user = JSON.parse(localStorage.getItem("user"));
// let email = JSON.parse(localStorage.getItem("email"));
// let name;
// if (email) {
//     let arr = email.split("." || "@");
//     name = arr[0];
// }

const MainContentDiv = styled.div`
    width: 100%;
    text-align: left;
    & img {
        width: 100%;
        height: 300px;
    }
    & h1 {
        font-size: 42px;
        font-weight: 800;
        text-align: left;
    }
    h2 {
        font-size: 32px;
        font-weight: 800;
        text-align: left;
    }
    h3 {
        font-size: 26.72px;
        font-weight: 800;
        text-align: left;
    }
    h4 {
        font-size: 20px;
        font-weight: 800;
        text-align: left;
    }
    h5 {
        font-size: 14px;
        font-weight: 800;
        text-align: left;
    }
    p {
        font-size: 20px;
    }
`;
const TagDiv = styled.div`
    width: auto;
    height: auto;
    border: 0.5px solid #e5e7eb;
    padding: 5px;
    border-radius: 3px;
    color: gray;
`;
const MasterDiv = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: #fff;
`;
const MainDiv = styled.div`
    width: 96%;
    height: auto;
    margin: auto;
    // border: 1px solid black;
    border-bottom: 1px solid #e5e7eb;
`;
const NavTop = styled.div`
    display: flex;
    width: 98.6%;
    justify-content: space-between;
    padding: 20px 10px 5px 10px;
`;
const ButtonsInnerDiv = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ButtonsDiv = styled.div`
    display: flex;
`;
const Buttons = styled.button`
    width: 40px;
    height: 40px;
    margin-top: 10px;
    background: transparent;
    outline: none;
    border: none;
    &:hover {
        background-color: #e5e5e5;
        border-radius: 50px;
    }
`;
const Button = styled.button`
    width: auto;
    height: 40px;
    margin: 10px;
    padding: 0 5px 0 5px 0;
    background: transparent;
    outline: none;
    border: none;
    &:hover {
        background-color: #e5e5e5;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
`;

const UserButton = styled.button`
    width: 50px;
    height: 50px;
    background: none;
    border: none;
    margin-top: 5px;
    // padding: 0 10px 0 0px;
    cursor: pointer;
`;
const Image = styled.img`
    // position: relative
    width: 40px;
    cursor: pointer;
    &:hover {
        background-color: #fff;
    }
`;
const AdjustDiv = styled.div`
    width: 65%;
    height: auto;
    // border: 1px solid;
    margin: auto;
`;
const BlogDiv = styled.div`
    width: 100%;
    display: flex;
    // border: 1px solid;
`;
const IconDiv = styled.div`
    width: 20%;
    display: flex;
    // border: 1px solid;
    flex-direction: column;
    row-gap: 30px;
`;
const NewDiv = styled.div`
    margin: auto;
    margin-top: 20px;
    margin-bottom: 0px;
    display: flex;

    &>div:nth-child(2){
      margin-left: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
`;

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
    }
`;

const HeadFlexSide = styled.div`
    display: flex;
    align-items: center;
    & > img {
        width: 100%;
        height: 100%;
    }
`;

const FlexBox = styled.div`
    display: flex;
    height: 70px;
    padding: 1rem;
    column-gap: 20px;
    width: 96%;
    margin: auto;
    text-align: left;
    border-top: 0.5px solid #e5e7eb;
    border-bottom: 0.5px solid #e5e7eb;
    //   padding: 20px 20px 20px 20px;
    // justify-content: space-between;
`;

const CommentFlexBox = styled.div`
    display: flex;
    height: 70px;
    padding: 5px;
    padding-left: 30px;
    column-gap: 20px;
    width: 96%;
    margin: auto;
    text-align: left;
    border: 0.5px solid #e5e7eb;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 20px;
    //   padding: 20px 20px 20px 20px;
    // justify-content: space-between;
`;
const InnerFlexBox = styled.div`
    position: relative;
    width: 80%;
    height: 300px;
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
const NewBtn = styled.button`
    position: absolute;
    padding: 10px;
    font-weight: 600;
    color: #2962ff;
    top: 15px;
    right: 20px;
    background: transparent;
    border: 1px solid #2962ff;
    border-radius: 5px;
`;
