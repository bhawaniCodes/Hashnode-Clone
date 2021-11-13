import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import axios from "axios";
import { auth } from "../config/firebase-config";

const FlexBox = styled.div`
  position: relative;
  display: flex;
  width: 11.6rem;
  height: 95vh;
  flex-direction: column;
  justify-content: space-between;
`;

const Button = styled.button`
  display: flex;
  width: 9.5rem;
  height: 47px;
  font-weight: 600;
  background-color: #2962ff;
  color: #fff;
  fill: #fff;
  border: none;
  border-radius: 10px;
  padding-left: 1.9rem;
  padding-right: 1rem;
  cursor: pointer;
  &:hover {
    background-color: rgb(41, 98, 255, 0.8);
  }
`;
const HeadSvg = styled.svg`
  display: block;
  height: 47px;
  width: 10rem;
  //   margin-right: 0.75rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
`;
const Svg = styled.svg`
  display: block;
  height: 47px;
  width: 1.4rem;
  margin-right: 0.75rem;
`;
const Text = styled.div`
  margin-top: 13px;
  font-size: 16px;
`;
const TransperentButton = styled.button`
  display: flex;
  width: 9.5rem;
  height: 42px;
  background: none;
  color: #000000;
  fill: black;
  border: none;
  border-radius: 10px;
  padding-right: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
const TransperentButtonHidden = styled.button`
  display: flex;
  width: 9.5rem;
  height: 42px;
  background: none;
  color: #000000;
  fill: black;
  border: none;
  border-left: 2px solid #e5e7eb;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
const SideSvg = styled.svg`
  display: block;
  height: 45px;
  width: 1.1rem;
  margin-right: 0.75rem;
`;
const UserButton = styled.button`
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  z-index: 0;
  // padding: 0 10px 0 0px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
const Image = styled.img`
  // position: relative
  width: 40px;
  margin-top: 20px;
  margin-bottom: 4vh;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;
const UserDiv = styled.div`
  position: fixed;
  bottom: 40px;
  left: 160px;
  width: 200px;
  padding-right: 15px;
  height: auto;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  z-index: 100;
  background-color:#fff;
`;
const UserButtonData = styled.button`
display: flex;
column-gap: 5px;
padding-left: 10px;
width:100%;
height:40px;
background: none;
outline: none;
border: none;
color: none;
font-weight: 500;
cursor: pointer;
`;
const UserButtonDataLog = styled.button`
display: flex;
column-gap: 5px;
padding-left: 10px;
padding-top:8px;
width:100%;
height:40px;
background: none;
outline: none;
border: none;
color: none;
font-weight: 500;
cursor: pointer;
`;
const DivButton = styled.div`
  padding: 3px;
`;
const UserDetails = styled.div`
display: flex;
column-gap: 10px;
width:100%;
height: auto;
padding: 10px;
`
const ImageClick = styled.img`
  width: 50px;
  cursor: pointer;
  &:hover {
    background-color: #fff;
  }
`;

const commonUrl = process.env.REACT_APP_COMMON_URL;
function Sidebar() {

  const [hidden, setHidden] = React.useState(true);
  const [userData, setUserData] = React.useState(false);
  const [userAuth, setUserAuth] = React.useState(false);
//   const [user, setUser] = React.useState("user");
  const history = useHistory();

  const handleHidden = () => {
    hidden ? setHidden(false) : setHidden(true);
  };
  const handleUser = () => {
    userData ? setUserData(false) : setUserData(true);
  };

  const handleLogOut = async() => {
    await auth.signOut();
    localStorage.removeItem('user')
    history.push("/");
  }
  const handleLogin = async() => {
    history.push("/index");
  }
  const handleBlog = () => {
    history.push("/myblog");
  }
  const handleDash = async() => {
    history.push("/dashboard");
  }
  let user = JSON.parse(localStorage.getItem("user"));
  let email = JSON.parse(localStorage.getItem("email"));
  let arr = (email.split("." || "@"))
    let name = arr[0]
//   console.log("user:", user);
  return (
    <>
      <FlexBox>
        <div>
          <div>
            <HeadSvg>
              <svg viewBox="0 0 688 118" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z"
                  fill="#2962FF"
                ></path>
                <path
                  d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z"
                  fill="black"
                ></path>
              </svg>
            </HeadSvg>
          </div>

          <Button onClick={() => history.push("/create/story")}>
            <div>
              <Svg>
                <svg viewBox="0 0 512 512">
                  <path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zM164.686 347.313c6.249 6.249 16.379 6.248 22.627 0L368 166.627l30.059 30.059L174 420.745V386h-48v-48H91.255l224.059-224.059L345.373 144 164.686 324.687c-6.249 6.248-6.249 16.378 0 22.626zm-38.539 121.285l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path>
                </svg>
              </Svg>
            </div>
            <Text>
              <div>WRITE</div>
            </Text>
          </Button>

          <TransperentButton>
            <div>
              <Svg>
                <svg viewBox="0 0 24 24" fill="gray">
                  <path d="M4.5 20.3h-.4c-1.9 0-3.5-1.6-3.5-3.5V9.4c0-.3.2-.5.5-.5h6.4c.2 0 .5.2.5.5v7.4c0 2-1.6 3.5-3.5 3.5zM1.6 9.9v6.9c0 1.4 1.1 2.5 2.5 2.5h.4c1.4 0 2.5-1.1 2.5-2.5V9.9H1.6z"></path>
                  <path d="M19.9 20.3H4.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5c1.4 0 2.5-1.1 2.5-2.5V5.9 4.2c0-.3.2-.5.5-.5h15.4c.3 0 .5.2.5.5v12.6c0 2-1.6 3.5-3.5 3.5zm-13-1h13c1.4 0 2.5-1.1 2.5-2.5V4.7H8V6c0-.1 0 0 0 0v10.8c0 1-.4 1.9-1.1 2.5z"></path>
                  <g>
                    <path d="M10.7 14.5h9.5v1h-9.5zM10.7 11h9.5v1h-9.5zM10.7 7.4h9.5v1h-9.5z"></path>
                  </g>
                </svg>
              </Svg>
            </div>
            <Text>
              <div>My Feed</div>
            </Text>
          </TransperentButton>

          <TransperentButton>
            <div>
              <Svg>
                <svg viewBox="0 0 496 512" fill="gray">
                  <path d="M264.97 272.97c9.38-9.37 9.38-24.57 0-33.94-9.37-9.37-24.57-9.37-33.94 0-9.38 9.37-9.38 24.57 0 33.94 9.37 9.37 24.57 9.37 33.94 0zM351.44 125c-2.26 0-4.51.37-6.71 1.16l-154.9 55.85c-7.49 2.7-13.1 8.31-15.8 15.8l-55.85 154.91c-5.65 15.67 10.33 34.27 26.4 34.27 2.26 0 4.51-.37 6.71-1.16l154.9-55.85c7.49-2.7 13.1-8.31 15.8-15.8l55.85-154.9c5.64-15.67-10.33-34.28-26.4-34.28zm-58.65 175.79l-140.1 50.51 50.51-140.11 140.11-50.51-50.52 140.11zM248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 464c-119.1 0-216-96.9-216-216S128.9 40 248 40s216 96.9 216 216-96.9 216-216 216z"></path>
                </svg>
              </Svg>
            </div>
            <Text>
              <div>Explore</div>
            </Text>
          </TransperentButton>

          <TransperentButton>
            <div>
              <Svg>
                <svg viewBox="0 0 512 512" fill="gray">
                  <path d="M497.941 225.941L286.059 14.059A48 48 0 00252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0014.059 33.941l211.882 211.882c18.745 18.745 49.137 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zm-22.627 45.255L271.196 475.314c-6.243 6.243-16.375 6.253-22.627 0L36.686 263.431A15.895 15.895 0 0132 252.117V48c0-8.822 7.178-16 16-16h204.118c4.274 0 8.292 1.664 11.314 4.686l211.882 211.882c6.238 6.239 6.238 16.39 0 22.628zM144 124c11.028 0 20 8.972 20 20s-8.972 20-20 20-20-8.972-20-20 8.972-20 20-20m0-28c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48z"></path>
                </svg>
              </Svg>
            </div>
            <Text>
              <div>Tags</div>
            </Text>
          </TransperentButton>

          <TransperentButton>
            <div>
              <SideSvg>
                <svg viewBox="0 0 384 512" fill="gray">
                  <path d="M336 0H48C21.49 0 0 21.49 0 48v464l192-112 192 112V48c0-26.51-21.49-48-48-48zm16 456.287l-160-93.333-160 93.333V48c0-8.822 7.178-16 16-16h288c8.822 0 16 7.178 16 16v408.287z"></path>
                </svg>
              </SideSvg>
            </div>
            <Text>
              <div>Bookmarks</div>
            </Text>
          </TransperentButton>

          <TransperentButton>
            <div>
              <Svg>
                <svg viewBox="0 0 200 200" fill="gray">
                  <g clip-path="url(#clip0)">
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
              </Svg>
            </div>
            <Text>
              <div>Search</div>
            </Text>
          </TransperentButton>

          {hidden ? (
            <TransperentButton onClick={handleHidden}>
              <div>
                <Svg>
                  <svg viewBox="0 0 448 512" fill="gray">
                    <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z"></path>
                  </svg>
                </Svg>
              </div>
              <Text>
                <div>More</div>
              </Text>
            </TransperentButton>
          ) : (
            <div>
              <TransperentButton onClick={handleHidden}>
                <div>
                  <Svg>
                    <svg viewBox="0 0 448 512" fill="gray">
                      <path d="M4.465 366.475l7.07 7.071c4.686 4.686 12.284 4.686 16.971 0L224 178.053l195.494 195.493c4.686 4.686 12.284 4.686 16.971 0l7.07-7.071c4.686-4.686 4.686-12.284 0-16.97l-211.05-211.051c-4.686-4.686-12.284-4.686-16.971 0L4.465 349.505c-4.687 4.686-4.687 12.284 0 16.97z"></path>
                    </svg>
                  </Svg>
                </div>
                <Text>
                  <div>More</div>
                </Text>
              </TransperentButton>

              <TransperentButtonHidden>
                <Text>
                  <div>RFAs</div>
                </Text>
              </TransperentButtonHidden>
              <TransperentButtonHidden>
                <Text>
                  <div>About</div>
                </Text>
              </TransperentButtonHidden>
              <TransperentButtonHidden>
                <Text>
                  <div>Careers</div>
                </Text>
              </TransperentButtonHidden>
              <TransperentButtonHidden>
                <Text>
                  <div>Official Blog</div>
                </Text>
              </TransperentButtonHidden>
            </div>
          )}
        </div>
        <div>
          <div>
            <UserButton>
              <svg viewBox="0 0 100 100" fill="gray" width="23px">
                <path
                  d="M50 23.61c-14.55 0-26.388 11.839-26.388 26.388 0 14.55 11.839 26.388 26.388 26.388 14.55 0 26.388-11.838 26.388-26.388 0-14.55-11.839-26.388-26.388-26.388zm0 45.369c-10.466 0-18.98-8.515-18.98-18.98 0-10.463 8.514-18.982 18.98-18.982 10.466 0 18.98 8.519 18.98 18.981 0 10.466-8.514 18.98-18.98 18.98zM50 18.209a3.705 3.705 0 003.704-3.704V3.704a3.704 3.704 0 00-7.407 0v10.801A3.703 3.703 0 0050 18.209zM50 81.786a3.704 3.704 0 00-3.704 3.703v10.804a3.704 3.704 0 007.408 0V85.489A3.706 3.706 0 0050 81.786zM96.296 46.295H85.495a3.704 3.704 0 000 7.407h10.801a3.704 3.704 0 000-7.407zM18.21 49.998a3.702 3.702 0 00-3.703-3.703H3.704a3.704 3.704 0 000 7.407h10.803a3.704 3.704 0 003.703-3.704zM77.716 27.52l7.636-7.64a3.704 3.704 0 000-5.236 3.701 3.701 0 00-5.236 0l-7.637 7.637a3.703 3.703 0 105.237 5.238zM22.282 72.477l-7.638 7.639a3.703 3.703 0 105.237 5.236l7.638-7.635a3.709 3.709 0 000-5.24 3.703 3.703 0 00-5.236 0zM77.718 72.48a3.705 3.705 0 00-5.24 0 3.706 3.706 0 000 5.237l7.64 7.635a3.703 3.703 0 105.236-5.236l-7.636-7.635zM22.282 27.52a3.704 3.704 0 005.237-5.24l-7.638-7.638a3.705 3.705 0 00-5.237 0 3.706 3.706 0 000 5.237l7.638 7.64z"
                  fill="fill-current"
                ></path>
              </svg>
            </UserButton>
          </div>
          <div>
            <UserButton>
              <svg viewBox="0 0 448 512" fill="gray" width="20px">
                <path d="M224 480c-17.66 0-32-14.38-32-32.03h-32c0 35.31 28.72 64.03 64 64.03s64-28.72 64-64.03h-32c0 17.65-14.34 32.03-32 32.03zm209.38-145.19c-27.96-26.62-49.34-54.48-49.34-148.91 0-79.59-63.39-144.5-144.04-152.35V16c0-8.84-7.16-16-16-16s-16 7.16-16 16v17.56C127.35 41.41 63.96 106.31 63.96 185.9c0 94.42-21.39 122.29-49.35 148.91-13.97 13.3-18.38 33.41-11.25 51.23C10.64 404.24 28.16 416 48 416h352c19.84 0 37.36-11.77 44.64-29.97 7.13-17.82 2.71-37.92-11.26-51.22zM400 384H48c-14.23 0-21.34-16.47-11.32-26.01 34.86-33.19 59.28-70.34 59.28-172.08C95.96 118.53 153.23 64 224 64c70.76 0 128.04 54.52 128.04 121.9 0 101.35 24.21 138.7 59.28 172.08C421.38 367.57 414.17 384 400 384z"></path>
              </svg>
            </UserButton>
          </div>
          <div>
            <UserButton onClick={handleUser}>
              <Image
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1629282644342/VGWU-WK52.png?w=200&h=200&fit=crop&crop=faces&auto=compress&auto=compress"
                alt="userImage"
              />
            </UserButton>
          </div>
        </div>
        {userData && (
          <UserDiv>
              {user && <>
              <UserDetails>
              <ImageClick
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1629282644342/VGWU-WK52.png?w=200&h=200&fit=crop&crop=faces&auto=compress&auto=compress"
                alt="userImage"
              />
              <div>
                  <h3>{name}</h3>
              </div>
              </UserDetails>
            <UserButtonData onClick={handleBlog}>
              <div>
                <svg fill="gray" viewBox="0 0 24 24" width="24">
                  <path d="M17.9 17.39c-.26-.8-1.01-1.39-1.9-1.39h-1v-3a1 1 0 0 0-1-1H8v-2h2a1 1 0 0 0 1-1V7h2a2 2 0 0 0 2-2v-.41c2.93 1.18 5 4.05 5 7.41 0 2.08-.8 3.97-2.1 5.39M11 19.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.22.21-1.79L9 15v1a2 2 0 0 0 2 2m1-16A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2z"></path>
                </svg>
              </div>
              <DivButton>Blog Home</DivButton>
            </UserButtonData>
            
            <UserButtonData onClick={handleDash}>
              <div>
                <svg fill="gray" viewBox="0 0 512 512" width="24"><path d="M482.696 299.276l-32.61-18.827a195.168 195.168 0 000-48.899l32.61-18.827c9.576-5.528 14.195-16.902 11.046-27.501-11.214-37.749-31.175-71.728-57.535-99.595-7.634-8.07-19.817-9.836-29.437-4.282l-32.562 18.798a194.125 194.125 0 00-42.339-24.48V38.049c0-11.13-7.652-20.804-18.484-23.367-37.644-8.909-77.118-8.91-114.77 0-10.831 2.563-18.484 12.236-18.484 23.367v37.614a194.101 194.101 0 00-42.339 24.48L105.23 81.345c-9.621-5.554-21.804-3.788-29.437 4.282-26.36 27.867-46.321 61.847-57.535 99.595-3.149 10.599 1.47 21.972 11.046 27.501l32.61 18.827a195.168 195.168 0 000 48.899l-32.61 18.827c-9.576 5.528-14.195 16.902-11.046 27.501 11.214 37.748 31.175 71.728 57.535 99.595 7.634 8.07 19.817 9.836 29.437 4.283l32.562-18.798a194.08 194.08 0 0042.339 24.479v37.614c0 11.13 7.652 20.804 18.484 23.367 37.645 8.909 77.118 8.91 114.77 0 10.831-2.563 18.484-12.236 18.484-23.367v-37.614a194.138 194.138 0 0042.339-24.479l32.562 18.798c9.62 5.554 21.803 3.788 29.437-4.283 26.36-27.867 46.321-61.847 57.535-99.595 3.149-10.599-1.47-21.972-11.046-27.501zm-65.479 100.461l-46.309-26.74c-26.988 23.071-36.559 28.876-71.039 41.059v53.479a217.145 217.145 0 01-87.738 0v-53.479c-33.621-11.879-43.355-17.395-71.039-41.059l-46.309 26.74c-19.71-22.09-34.689-47.989-43.929-75.958l46.329-26.74c-6.535-35.417-6.538-46.644 0-82.079l-46.329-26.74c9.24-27.969 24.22-53.869 43.929-75.969l46.309 26.76c27.377-23.434 37.063-29.065 71.039-41.069V44.464a216.79 216.79 0 0187.738 0v53.479c33.978 12.005 43.665 17.637 71.039 41.069l46.309-26.76c19.709 22.099 34.689 47.999 43.929 75.969l-46.329 26.74c6.536 35.426 6.538 46.644 0 82.079l46.329 26.74c-9.24 27.968-24.219 53.868-43.929 75.957zM256 160c-52.935 0-96 43.065-96 96s43.065 96 96 96 96-43.065 96-96-43.065-96-96-96zm0 160c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z"></path></svg>
              </div>
              <DivButton>Blog Dashboard</DivButton>
            </UserButtonData>
            </>
        }
            {user ? <UserButtonData onClick={handleLogOut}>
              <div>
                <svg fill="gray" viewBox="0 0 512 512" width="24"><path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"></path></svg>
              </div>
              <DivButton>Log out</DivButton>
            </UserButtonData> : <UserButtonDataLog onClick={handleLogin}>
              <div>
                <svg fill="gray" viewBox="0 0 512 512" width="24"><path d="M48 64h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h132c6.6 0 12 5.4 12 12v8c0 6.6-5.4 12-12 12H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48zm279 19.5l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l132 131.4H172c-6.6 0-12 5.4-12 12v10c0 6.6 5.4 12 12 12h279.9L320 404.4c-4.7 4.7-4.7 12.3 0 17l7.1 7.1c4.7 4.7 12.3 4.7 17 0l164.5-164c4.7-4.7 4.7-12.3 0-17L344 83.5c-4.7-4.7-12.3-4.7-17 0z"></path></svg>
              </div>
              <DivButton>Log in</DivButton>
            </UserButtonDataLog>}
          </UserDiv>
        )}
      </FlexBox>
    </>
  );
}

export default Sidebar;
