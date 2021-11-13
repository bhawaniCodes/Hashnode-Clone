import React from 'react'
import styled from "styled-components";
import { useHistory } from "react-router";

const FootDiv = styled.div`
position : relative;
width:100%;
height:auto;
z-index: 0;
`
const Foot = styled.div`
width: 100%;
height:auto;
border-top: 0.5px solid #E5E7EB;
padding-bottom: 80px;
z-index: 1;
`
const MainFoot = styled.div`
width: 92%;
height:auto;
margin: auto;
padding: 50px;
border-top: 0.5px solid #E5E7EB;
z-index: 2;

`
const Button = styled.button`
//   display: flex;
  width: auto;
  height: 47px;
  font-weight: 600;
  font-size: 18px;
  background-color: #2962ff;
  color: #fff;
  fill: #fff;
  border: none;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  &:hover{
    background-color: rgb(41,98,255,0.8);
}
`
const TitleDiv = styled.div`
width: 60%;
margin: auto;
font-size:35px;
font-weight: 700;
padding-top: 80px;
`
const Sub = styled.div`
width:40%;
padding: 10px 15px 35px 15px;
margin:auto;
font-Size: 25px;
color: gray;
font-weight: 500;
`
const FlexBox = styled.div`
display: flex;
justify-content: space-between;
padding:20px;
`
const FlexBoxDiv = styled.div`
width:88%;
display: flex;
justify-content: space-between;
padding: 20px;
`
const FlexBoxTag = styled.div`
width:75%;
display: flex;
justify-content: space-between;
`
const HeadSvg = styled.svg`
display: block;
  height: 50px;
  width: 12rem;
  cursor: pointer;
`
const FooSub = styled.div`
width:55%;
// margin:auto;
font-Size: 15px;
text-align: left;
font-weight: 500;
color: #424242;
`
const FooSubData = styled.div`
width:54%;
// margin:auto;
font-Size: 18px;
color: gray;
text-align: left;
`
const FooSubDataBottom = styled.div`
width:54%;
margin-bottom:10px;
font-Size: 18px;
color: gray;
text-align: left;
`
const TransperentButton = styled.button`
//   display: flex;
//   width: 6rem;
  height: 47px;
  font-weight: 600;
  font-size: 18px;
  background-color: none;
  color: #808080;
  // fill: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  &:hover{
    background-color: rgb(41,98,255,0.8);
}
`
const Image = styled.img`
position: absolute;
width: 400px;
height: 200px;
right: 80px;
top: 300px;
z-index: 10;
background-color: white;
`
const SubTitleSocial = styled.div`
width:70%;
// margin: auto;
display: flex;
flex-direction: row;
column-gap:10px;
flex-wrap: wrap;
padding: 15px 35px 15px 75px;
font-Size: 15px;
color: gray;
text-align:left;
border-bottom: 0.5px solid #E5E7EB;
`
const ButtonRightActive = styled.button`
width: 40px;
height: 40px;
outline: none;
border: none;
border-radius: 10px;
color: gray;
padding-top: 5px;
background-color: #E5E7EB;
color: #2962FF;
`
const BottomDiv = styled.div`
color: #333333;
padding-top: 5px;
`
function Footer() {
    const history = useHistory();
    return (
        <FootDiv>
        <Foot>
            <TitleDiv>Start blogging with Hashnode, it's Free!</TitleDiv>
            <Sub>Join the fastest growing dev community 🚀</Sub>
            <Button>Start your personal blog for FREE</Button>
        </Foot>
        <MainFoot>
            <FlexBox>
                <div><HeadSvg><svg viewBox="0 0 688 118" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.95 38.655c-10.6 10.6-10.6 27.784 0 38.383l30.705 30.706c10.6 10.599 27.784 10.599 38.383 0l30.706-30.706c10.599-10.6 10.599-27.784 0-38.383L77.038 7.95c-10.6-10.599-27.784-10.599-38.383 0L7.95 38.655zm63.33 32.626c7.42-7.42 7.42-19.449 0-26.868-7.419-7.42-19.448-7.42-26.867 0-7.42 7.42-7.42 19.448 0 26.868 7.42 7.419 19.448 7.419 26.868 0z" fill="#2962FF"></path><path d="M161.437 78.362c.043-8.549 5.268-13.558 12.781-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.819 12.565h-.777V28.276h-17.876v88.429h18.394V78.362zM232.967 117.957c9.801 0 16.148-4.275 19.387-10.449h.518v9.197h17.444V71.972c0-15.803-13.385-22.453-28.152-22.453-15.89 0-26.339 7.6-28.887 19.69l17.013 1.381c1.252-4.404 5.181-7.642 11.787-7.642 6.261 0 9.845 3.152 9.845 8.592v.26c0 4.274-4.534 4.835-16.062 5.958-13.127 1.209-24.914 5.613-24.914 20.423 0 13.126 9.369 19.776 22.021 19.776zm5.267-12.695c-5.656 0-9.715-2.633-9.715-7.685 0-5.182 4.275-7.73 10.752-8.636 4.015-.561 10.578-1.511 12.78-2.98V93c0 6.951-5.742 12.262-13.817 12.262zM334.904 69.295c-1.64-12.22-11.485-19.776-28.238-19.776-16.969 0-28.152 7.859-28.109 20.64-.043 9.93 6.218 16.364 19.171 18.955l11.485 2.288c5.786 1.166 8.42 3.282 8.506 6.606-.086 3.93-4.361 6.736-10.794 6.736-6.563 0-10.924-2.806-12.047-8.204l-18.091.95c1.727 12.695 12.521 20.51 30.095 20.51 17.185 0 29.49-8.765 29.534-21.848-.044-9.586-6.304-15.329-19.171-17.962l-12.004-2.418c-6.175-1.339-8.463-3.455-8.42-6.65-.043-3.972 4.448-6.563 10.147-6.563 6.39 0 10.19 3.498 11.097 7.772l16.839-1.036zM361.529 78.362c.043-8.549 5.267-13.558 12.78-13.558 7.47 0 11.874 4.793 11.831 12.954v38.947h18.394V74.476c.043-15.544-9.111-24.957-22.928-24.957-10.06 0-16.796 4.75-19.818 12.565h-.778V28.276h-17.875v88.429h18.394V78.362zM432.54 78.362c.043-8.549 5.138-13.558 12.565-13.558 7.383 0 11.831 4.836 11.787 12.954v38.947h18.394V74.476c0-15.457-9.067-24.957-22.884-24.957-9.845 0-16.969 4.836-19.948 12.565h-.778V50.383h-17.53v66.322h18.394V78.362zM514.885 118c20.122 0 32.643-13.774 32.643-34.197 0-20.553-12.521-34.284-32.643-34.284-20.121 0-32.642 13.731-32.642 34.284 0 20.423 12.521 34.197 32.642 34.197zm.087-14.249c-9.283 0-14.033-8.506-14.033-20.078s4.75-20.12 14.033-20.12c9.11 0 13.86 8.549 13.86 20.12 0 11.572-4.75 20.078-13.86 20.078zM579.064 117.784c10.708 0 16.278-6.174 18.826-11.701h.777v10.622h18.135v-88.43h-18.351v33.248h-.561c-2.462-5.397-7.773-12.004-18.869-12.004-14.551 0-26.857 11.313-26.857 34.111 0 22.194 11.788 34.154 26.9 34.154zm5.829-14.637c-9.024 0-13.947-8.032-13.947-19.603 0-11.486 4.836-19.387 13.947-19.387 8.938 0 13.947 7.556 13.947 19.387 0 11.83-5.096 19.603-13.947 19.603zM657.286 118c16.408 0 27.461-7.988 30.052-20.294l-17.012-1.122c-1.857 5.051-6.606 7.685-12.738 7.685-9.197 0-15.026-6.088-15.026-15.976v-.043h45.165v-5.052c0-22.539-13.645-33.679-31.175-33.679-19.517 0-32.168 13.86-32.168 34.327 0 21.028 12.479 34.154 32.902 34.154zm-14.724-41.149c.389-7.556 6.132-13.601 14.292-13.601 7.988 0 13.515 5.7 13.558 13.601h-27.85z" fill="black"></path></svg>
                </HeadSvg>
                <FooSubData>
                A blogging platform built for developers by developers. Blog on personal domain, share ideas, and connect with the global dev community!
                </FooSubData>
                </div>
                <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1622786771987/7pzz7zL07.png?auto=compress" alt="image"/>
            </FlexBox>
            <FlexBoxDiv>
                <FlexBoxTag>
                    
                    <FooSub>
                        <FooSubDataBottom>Explore</FooSubDataBottom>
                        <BottomDiv>Feed</BottomDiv>
                        <BottomDiv>Trending Blogs</BottomDiv>
                        <BottomDiv>Tags</BottomDiv>
                        <BottomDiv>Search</BottomDiv>
                        <BottomDiv>Bookmarks</BottomDiv>
                        <BottomDiv>Hashnode APIs</BottomDiv>
                    </FooSub>
                    <FooSub>
                        <FooSubDataBottom>Company</FooSubDataBottom>
                        <BottomDiv>About Hashnode</BottomDiv>
                        <BottomDiv>Careers</BottomDiv>
                        <BottomDiv>Official Blog</BottomDiv>
                        <BottomDiv>Logos and Media</BottomDiv>
                        <BottomDiv>Changelog</BottomDiv>
                    </FooSub>
                    <FooSub>
                        <FooSubDataBottom>Comparisons</FooSubDataBottom>
                        <BottomDiv>Hashnode vs Medium</BottomDiv>
                        <BottomDiv>Hashnode vs Ghost</BottomDiv>
                        <BottomDiv>Hashnode vs WordPress</BottomDiv>
                        <BottomDiv>Hashnode vs Dev.to</BottomDiv>
                    </FooSub>
                    <FooSub>
                        <FooSubDataBottom>Support</FooSubDataBottom>
                        <BottomDiv>Support Docs</BottomDiv>
                        <BottomDiv>Contact</BottomDiv>
                        <BottomDiv>Join Discord</BottomDiv>
                        <BottomDiv>Feature Requests</BottomDiv>
                    </FooSub>

                    








                  
                </FlexBoxTag>
                <Button onClick={() => history.push("/create/story")}>Start A Blog</Button>
                <TransperentButton onClick={() => history.push("/login")}>Sign In</TransperentButton>
            </FlexBoxDiv>
        </MainFoot>
        <SubTitleSocial>
            <ButtonRightActive>
            <svg viewBox="0 0 512 512" fill="#333333" width="25px"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg>
            </ButtonRightActive>
            <ButtonRightActive>
            <svg viewBox="0 0 448 512" fill="#333333" width="25px"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
            </ButtonRightActive>
            <ButtonRightActive>
            <svg viewBox="0 0 24 24" fill="#333333" width="25px"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>
            </ButtonRightActive>
            <ButtonRightActive>
            <svg viewBox="0 0 496 512" fill="#333333" width="25px"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
            </ButtonRightActive>
            <ButtonRightActive>
            <svg viewBox="0 0 512 512" fill="#333333" width="25px"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
            </ButtonRightActive>
            <ButtonRightActive>
            <svg viewBox="0 0 576 512" fill="#333333" width="25px"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </ButtonRightActive>
            </SubTitleSocial>
        </FootDiv>
    )
}

export default Footer
