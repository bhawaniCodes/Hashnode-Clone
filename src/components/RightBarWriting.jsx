import React from 'react'
import styled from "styled-components";

const TopDiv = styled.div`
font-size: 20px;
text-align: left;
width: 94.5%;
height: auto;
margin: auto;
padding: 10px 10px 0px 20px;
`
export const SubTitle = styled.div`
// margin:0px;
padding: 10px 10px 10px 20px;
font-Size: 15px;
color: gray;
text-align:left;
border-bottom: 0.5px solid #E5E7EB;
`

function RightBarWriting() {
    return (
        <>
        <TopDiv>
            Writing Challanges
        </TopDiv>
        <SubTitle>
        Accept challenges on Hashnode to become better at blogging and win cool badges showcase on your blog.
        </SubTitle>
        </>
    )
}

export default RightBarWriting
