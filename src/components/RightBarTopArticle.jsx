import React from 'react'
import styled from "styled-components";
import { v4 as uuid } from 'uuid';

const FlexBox = styled.div`
  display: flex;
  width: 88.5%;
  height: auto;
  margin: auto;
  padding: 20px 20px 20px 20px;
  border-bottom: 0.5px solid #E5E7EB;
  justify-content: space-between;
`;
const DataFlexBox = styled.div`
  display: flex;
  width: 94.5%;
  height: auto;
  margin: auto;
  padding: 10px 10px 10px 10px;
//   border-bottom: 0.5px solid #E5E7EB;
  justify-content: space-between;
`;
const Title = styled.div`
margin:0px;
padding:0px;
font-Size: 18px;
font-weight: 600;
`
export const SubTitle = styled.div`
margin:0px;
padding:0px;
font-Size: 15px;
color: gray;
text-align:left;
`
const ButtonRight = styled.button`
width: 40px;
height: 30px;
background: none;
outline: none;
border: none;
border-radius: 10px;
font-weight: 600;
color: gray;
&:hover{
    background-color: #E5E7EB;
    color: #2962FF;
}
`
const ButtonRightActive = styled.button`
width: 40px;
height: 30px;
outline: none;
border: none;
border-radius: 10px;
font-weight: 600;
color: gray;
background-color: #E5E7EB;
color: #2962FF;
`
const DataFlexSession = styled.div`
display : flex;
flex-direction: row;
column-gap: 15px;

`
const DataFlex = styled.div`
display : flex;
flex-direction: row;
column-gap: 5px;
`
const userBlog = [
    {
        id: uuid(),
        image:"https://blog.avneesh.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1631683473904%2F3qCLnFBau.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75",
        desc : "Create a custom video player in React",
        subname: "📽️",
        name: "Avneesh Agarwal",
        like: "125",
        comment: "10"

    },
    {
        id: uuid(),
        image:"https://blog.avneesh.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1631683473904%2F3qCLnFBau.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75",
        desc : "Create a custom video player in React",
        subname: "📽️",
        name: "Avneesh Agarwal",
        like: "125",
        comment: "10"

    },
    {
        id: uuid(),
        image:"https://blog.avneesh.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1631683473904%2F3qCLnFBau.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75",
        desc : "Create a custom video player in React",
        subname: "📽️",
        name: "Avneesh Agarwal",
        like: "125",
        comment: "10"

    },
    {
        id: uuid(),
        image:"https://blog.avneesh.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1631683473904%2F3qCLnFBau.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75",
        desc : "Create a custom video player in React",
        subname: "📽️",
        name: "Avneesh Agarwal",
        like: "125",
        comment: "10"

    },
    {
        id: uuid(),
        image:"https://blog.avneesh.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1631683473904%2F3qCLnFBau.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75",
        desc : "Create a custom video player in React",
        subname: "📽️",
        name: "Avneesh Agarwal",
        like: "125",
        comment: "10"

    },
    {
        id: uuid(),
        image:"https://blog.avneesh.tech/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1631683473904%2F3qCLnFBau.png%3Fw%3D200%26h%3D200%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=256&q=75",
        desc : "Create a custom video player in React",
        subname: "📽️",
        name: "Avneesh Agarwal",
        like: "125",
        comment: "10"

    },
]

function RightBarTopArticle() {
    return (
        <>
            <FlexBox>
            <div>
                <Title>Top articles</Title>
                <SubTitle>Last week</SubTitle>
            </div>
            <div>
                <ButtonRightActive>1w</ButtonRightActive>
                <ButtonRight>1m</ButtonRight>
                <ButtonRight>3m</ButtonRight>
                <ButtonRight>6m</ButtonRight>
            </div>
            </FlexBox>
                {
                    userBlog.map((e)=>{
                        return(<DataFlexBox key={e.id}>
                            <img src={e.image} alt="avneesh" width="50px" height="50px" />
                            <div>
                                <div>{e.desc}</div>
                                <SubTitle>{e.subname}</SubTitle>
                                <SubTitle>{e.name}</SubTitle>
                                <DataFlexSession>
                                {e.like != "" && <DataFlex>{<svg viewBox="0 0 512 512" fill="gray" width="20px"><path d="M496.656 285.683C506.583 272.809 512 256 512 235.468c-.001-37.674-32.073-72.571-72.727-72.571h-70.15c8.72-17.368 20.695-38.911 20.695-69.817C389.819 34.672 366.518 0 306.91 0c-29.995 0-41.126 37.918-46.829 67.228-3.407 17.511-6.626 34.052-16.525 43.951C219.986 134.75 184 192 162.382 203.625c-2.189.922-4.986 1.648-8.032 2.223C148.577 197.484 138.931 192 128 192H32c-17.673 0-32 14.327-32 32v256c0 17.673 14.327 32 32 32h96c17.673 0 32-14.327 32-32v-8.74c32.495 0 100.687 40.747 177.455 40.726 5.505.003 37.65.03 41.013 0 59.282.014 92.255-35.887 90.335-89.793 15.127-17.727 22.539-43.337 18.225-67.105 12.456-19.526 15.126-47.07 9.628-69.405zM32 480V224h96v256H32zm424.017-203.648C472 288 472 336 450.41 347.017c13.522 22.76 1.352 53.216-15.015 61.996 8.293 52.54-18.961 70.606-57.212 70.974-3.312.03-37.247 0-40.727 0-72.929 0-134.742-40.727-177.455-40.727V235.625c37.708 0 72.305-67.939 106.183-101.818 30.545-30.545 20.363-81.454 40.727-101.817 50.909 0 50.909 35.517 50.909 61.091 0 42.189-30.545 61.09-30.545 101.817h111.999c22.73 0 40.627 20.364 40.727 40.727.099 20.363-8.001 36.375-23.984 40.727zM104 432c0 13.255-10.745 24-24 24s-24-10.745-24-24 10.745-24 24-24 24 10.745 24 24z"></path></svg>}{e.like}</DataFlex>}
                                {e.comment != "" && <DataFlex>{<svg fill="gray" width="20px" viewBox="0 0 576 512"><path d="M569.9 441.1c-.5-.4-22.6-24.2-37.9-54.9 27.5-27.1 44-61.1 44-98.2 0-80-76.5-146.1-176.2-157.9C368.4 72.5 294.3 32 208 32 93.1 32 0 103.6 0 192c0 37 16.5 71 44 98.2-15.3 30.7-37.3 54.5-37.7 54.9-6.3 6.7-8.1 16.5-4.4 25 3.6 8.5 12 14 21.2 14 53.5 0 96.7-20.2 125.2-38.8 9.1 2.1 18.4 3.7 28 4.8 31.5 57.5 105.5 98 191.8 98 20.8 0 40.8-2.4 59.8-6.8 28.5 18.5 71.6 38.8 125.2 38.8 9.2 0 17.5-5.5 21.2-14 3.6-8.5 1.9-18.3-4.4-25zM155.4 314l-13.2-3-11.4 7.4c-20.1 13.1-50.5 28.2-87.7 32.5 8.8-11.3 20.2-27.6 29.5-46.4L83 283.7l-16.5-16.3C50.7 251.9 32 226.2 32 192c0-70.6 79-128 176-128s176 57.4 176 128-79 128-176 128c-17.7 0-35.4-2-52.6-6zm289.8 100.4l-11.4-7.4-13.2 3.1c-17.2 4-34.9 6-52.6 6-65.1 0-122-25.9-152.4-64.3C326.9 348.6 416 278.4 416 192c0-9.5-1.3-18.7-3.3-27.7C488.1 178.8 544 228.7 544 288c0 34.2-18.7 59.9-34.5 75.4L493 379.7l10.3 20.7c9.4 18.9 20.8 35.2 29.5 46.4-37.1-4.2-67.5-19.4-87.6-32.4z"></path></svg>}{e.comment}</DataFlex>}


                                </DataFlexSession>
                                

                            </div>

                            </DataFlexBox>
                        )
                        
})
                }

        </>
    )
}

export default RightBarTopArticle
