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
const ButtonRight = styled.button`
width: 100px;
height: 30px;
background: none;
outline: none;
border: none;
border-radius: 10px;
font-weight: 550;
color: gray;
&:hover{
    background-color: #E5E7EB;
    color: #2962FF;
}
`
const Button = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
row-gap: 10px;
width: 175px;
height: 100px;
background: none;
outline: none;
border: none;
cursor:pointer;
&:hover{
    background-color: #E5E7EB;
    color: #2962FF;
}
`
const Div = styled.div`
display: flex;
flex-wrap: wrap;
`
const ButtonRightActive = styled.button`
width: 100px;
height: 30px;
outline: none;
border: none;
border-radius: 10px;
font-weight: 600;
color: gray;
background-color: #E5E7EB;
color: #2962FF;
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
        <SubTitle>

        <ButtonRightActive>What`s next</ButtonRightActive>
                <ButtonRight>Completed</ButtonRight>
        </SubTitle>
        <Div>
            <Button>
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606289975354/LJvLIwI0A.png?auto=compress" alt="idea" width="40px" height="40px"/>
                <div>Crazy Blogger</div>
            </Button>
            <Button>
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606290543116/YLi4z0Voa.png?auto=compress" alt="Town" width="40px" height="40px"/>
                <div>Talk of the town</div>
            </Button>
            <Button>
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606290664793/u20p_tVVO.png?auto=compress" alt="words" width="40px" height="40px"/>
                <div>Word Warrior</div>
            </Button>
            <Button>
                <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1606287626442/J2KjyfCP8.png?auto=compress" alt="bulb" width="40px" height="40px"/>
                <div>#2Articles1Week Challenge</div>
            </Button>
        </Div>

        </>
    )
}

export default RightBarWriting
