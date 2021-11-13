import React from 'react'
import styled from "styled-components";

const Announce = styled.div`
display: flex;
column-gap: 150px;
width: 95%;
margin: auto;
height: 50px;
// border: 1px solid black;
border-radius: 50px;
background-color: #E6F4F0;
`
const Button = styled.button`
width: 200px;
height: 100%;
border: none;
outline: none;
border-radius: 50px;
background-color: #139E5C;
font-weight: 800;
color: #fff;
font-size: 15px;
`
const SideDiv = styled.div`
padding-top:12px;
font-weight: 700;
`
const Span = styled.span`
color:#2962FF;
`

function Announcement() {
    return (
        <div>
            <Announce>
                <Button>Announcement</Button>
                <SideDiv>
                🙌 $6.7M in fresh funding to build the next-gen developer blogging community. <span>Learn More</span> 
                </SideDiv>
            </Announce>
        </div>
    )
}

export default Announcement
