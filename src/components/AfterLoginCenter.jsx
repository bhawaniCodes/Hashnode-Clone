import React from 'react'
import styled from "styled-components";
import CenterCard from './CenterCard';

const Div = styled.div`
width:100%;
overflow: hidden;
`

const MasterDiv = styled.div`
width: 100%;
border-radius: 10px;
border: 0.5px solid #E5E7EB;
margin-bottom: 2vh;
background-color: #fff;
`
const MasterFlexDiv = styled.div`
display: flex;
justify-content: space-between;
`
const FlexDiv = styled.div`
display: flex;
column-gap: 10px;
`
const ShareDiv = styled.div`
font-size: 18px;
font-weight: 600;
margin: 3px 0 0 8px;
`
const TopDiv = styled.div`
height: 170px;
padding: 0 10px 0 10px;
`
const AdjustDiv = styled.div`
padding-top: 25px;
height: 25px;
`
const TopDivOne = styled.div`
position: relative;
height: 300px;
padding-top: 50px;
`
const TopDivTwo = styled.div`
height: 30px;
text-align: left;
padding:20px;
font-size: 20px;
font-weight: 600;
`
const TopDivThree = styled.div`
height: auto;
padding: 10px 10px 10px 10px;
`
const Button = styled.button`
  width: 13rem;
  height: 47px;
  font-weight: 600;
  background-color: #1DA1F2;
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
`;
const TransperentButton = styled.button`
position: absolute;
right: 0px;
top: 10px;
  width: 50px;
  height: 42px;
  background: none;
  color: #000000;
  fill: black;
  border: none;
  border-radius: 10px;
  padding-right: 1rem;
  cursor: pointer;
  &:hover{
      background-color: #fff;
  }
`;
const InnerFlexBox = styled.div`
  width: 100%;
  height: auto;
  text-align: left;
  padding-bottom: 10px;
  border-bottom: 0.5px solid #e5e7eb;
color: #409E5C;
font-weight: 600;
`;
const Image = styled.img`
width:40px;
margin-top: 20px;
margin-bottom: 4vh;
cursor: pointer;
&:hover{
    background-color: #fff;
}
`
const H3 = styled.div`
font-weight: 700;
margin-top: 25px;
`
function AfterLoginCenter() {
    return (
        <Div>
            <MasterDiv>
            <TopDiv>
                <MasterFlexDiv>
                <FlexDiv>
                    <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1629282644342/VGWU-WK52.png?w=200&h=200&fit=crop&crop=faces&auto=compress&auto=compress" alt="user" />
                    <H3>Mayur Kamthe</H3>
                </FlexDiv>
                <FlexDiv>
                    <AdjustDiv>
                    <svg viewBox="0 0 640 512" fill="gray" width="25px"><path d="M625.941 293.823L421.823 497.941c-18.746 18.746-49.138 18.745-67.882 0l-1.775-1.775 22.627-22.627 1.775 1.775c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L391.431 36.686A15.895 15.895 0 00380.117 32h-19.549l-32-32h51.549a48 48 0 0133.941 14.059L625.94 225.941c18.746 18.745 18.746 49.137.001 67.882zM252.118 32H48c-8.822 0-16 7.178-16 16v204.118c0 4.274 1.664 8.292 4.686 11.314l211.882 211.882c6.253 6.253 16.384 6.243 22.627 0l204.118-204.118c6.238-6.239 6.238-16.389 0-22.627L263.431 36.686A15.895 15.895 0 00252.118 32m0-32a48 48 0 0133.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882L293.823 497.941c-18.746 18.746-49.138 18.745-67.882 0L14.059 286.059A48 48 0 010 252.118V48C0 21.49 21.49 0 48 0h204.118zM144 124c-11.028 0-20 8.972-20 20s8.972 20 20 20 20-8.972 20-20-8.972-20-20-20m0-28c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.49-48 48-48z"></path></svg>
                    </AdjustDiv>
                    <h3>My Tags</h3>
                </FlexDiv>
                </MasterFlexDiv>
            </TopDiv>
            </MasterDiv>
            <MasterDiv><TopDivOne>
                <TransperentButton><svg viewBox="0 0 320 512" fill="gray" width="15px"><path d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg></TransperentButton>
                <div><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611778584358/PuqnB6fRp.png?auto=compress" alt="love image" width="100" height="100"/></div>
                <div>Welcome, <b>Mayur Kamthe.</b></div>
                <div>We hope you brought pizza. 🍕</div>
                <p>Tell the world about us.</p>
                <Button><FlexDiv><svg viewBox="0 0 512 512" width="25px"><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><ShareDiv>Share Hashnode</ShareDiv></FlexDiv></Button>
                </TopDivOne></MasterDiv>
            <MasterDiv><TopDivTwo>My feed</TopDivTwo></MasterDiv>
            <MasterDiv><TopDivThree>
                <InnerFlexBox>
                Featured today ✨
                </InnerFlexBox>
                <CenterCard/>
                </TopDivThree></MasterDiv>
            

        </Div>
    )
}

export default AfterLoginCenter
