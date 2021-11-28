import React from "react";
import DetailsComponent from "./DetailsComponent";
import Styles from "./Details.module.css";
import styled from "styled-components";
import { useEffect } from "react";
import axios  from "axios";
import { Link } from "react-router-dom";

    const commonUrl = process.env.REACT_APP_COMMON_URL;
function Details() {
    const [data, setData] = React.useState([]);

    async function getBlogs() {
        const token = JSON.parse(localStorage.getItem("user"));
        const data = await axios.get(`${commonUrl}/blogs/one`, {
            headers: {
                authorization: `Bearer ${token}`,
            },
        });
        console.log("data: ", data.data);
        setData(data.data)
    }

    useEffect(() => {
        console.log("hiiiiii")
        getBlogs();
    }, []);

    let email = JSON.parse(localStorage.getItem("email"));
    let arr = email.split("." || "@");
    let name = arr[0];

    return (
        <div>
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
                            <svg viewBox="0 0 200 200" fill="gray" width="25px">
                                <path
                                    fillRule="evenodd"
                                    clipPath="evenodd"
                                    d="M13.742 66.824c-18.323 18.323-18.323 48.029 0 66.352l53.082 53.082c18.323 18.323 48.029 18.323 66.352 0l53.082-53.082c18.323-18.323 18.323-48.03 0-66.352l-53.082-53.082c-18.323-18.323-48.03-18.323-66.352 0L13.742 66.824zm109.481 56.399c12.826-12.826 12.826-33.62 0-46.446s-33.62-12.826-46.446 0-12.826 33.62 0 46.446 33.62 12.826 46.446 0z"
                                ></path>
                            </svg>
                        </Button>
                        <Button>
                            <svg viewBox="0 0 448 512" fill="gray" width="25px">
                                <path d="M80 368c17.645 0 32 14.355 32 32s-14.355 32-32 32-32-14.355-32-32 14.355-32 32-32m0-48c-44.183 0-80 35.817-80 80s35.817 80 80 80 80-35.817 80-80-35.817-80-80-80zm367.996 147.615c-6.449-237.834-198.057-429.163-435.61-435.61C5.609 31.821 0 37.229 0 44.007v24.02c0 6.482 5.147 11.808 11.626 11.992 211.976 6.04 382.316 176.735 388.354 388.354.185 6.479 5.51 11.626 11.992 11.626h24.02c6.78.001 12.187-5.608 12.004-12.384zm-136.239-.05C305.401 305.01 174.966 174.599 12.435 168.243 5.643 167.977 0 173.444 0 180.242v24.024c0 6.431 5.072 11.705 11.497 11.98 136.768 5.847 246.411 115.511 252.258 252.258.275 6.425 5.549 11.497 11.98 11.497h24.024c6.797-.001 12.264-5.644 11.998-12.436z"></path>
                            </svg>
                        </Button>
                    </ButtonsDiv>
                </ButtonsInnerDiv>
            </MainDiv>

            <div className={Styles.mainCont}>
                <br />
                <br />

                {data.map((item) => (
                    <DetailsComponent {...item} />
                ))}
                {/* <DetailsComponent/>
            <DetailsComponent/> */}
            </div>
        </div>
    );
}

export default Details;

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
