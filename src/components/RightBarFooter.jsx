import React from 'react'
import styled from "styled-components";

const Div = styled.div`
width: 100%;
`
export const SubTitle = styled.div`
width:70%;
margin: auto;
display: flex;
flex-direction: row;
column-gap:10px;
flex-wrap: wrap;
padding: 15px 35px 15px 35px;
font-Size: 15px;
color: gray;
text-align:left;
border-bottom: 0.5px solid #E5E7EB;
`
const SubTitleButton = styled.div`
width:90%;
margin: auto;
display: flex;
flex-direction: row;
column-gap:10px;
flex-wrap: wrap;
padding: 15px 15px 15px 15px;
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
const Button = styled.button`
display: flex;
flex-direction: column;
// align-items: center;
justify-content: center;
row-gap: 10px;
width: 150px;
height: 30px;
background: none;
outline: none;
border: none;
border-radius: 10px;
cursor:pointer;
&:hover{
    background-color: #E5E7EB;
    color: #2962FF;
}
`
const CopyRight = styled.p`
color:gray;
text-align:left;
padding-left: 20px;
font-size: 14px;
`
function RightBarFooter() {
    return (
        <Div>
            <SubTitle>
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
            <svg viewBox="0 0 512 512" fill="#333333" width="25px"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
            </ButtonRightActive>
            <ButtonRightActive>
            <svg viewBox="0 0 576 512" fill="#333333" width="25px"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
            </ButtonRightActive>
            </SubTitle>
            <SubTitleButton>
            <Button>About</Button>
            <Button>Service Status</Button>
            <Button>Platform APIs</Button>
            <Button>Official Blog</Button>
            <Button>Support</Button>
            <Button>Careers</Button>
            <Button>Media</Button>
            </SubTitleButton>
            <SubTitleButton>
            <Button>Feature Request</Button>
            <Button>Changelog</Button>
            <Button>Ambassador 🎖️</Button>
            <Button>Must-read 🗞️</Button>
            </SubTitleButton>
            <SubTitleButton>
            <Button>Privacy</Button>
            <Button>Terms</Button>
            </SubTitleButton>
            <CopyRight>© 2021 . Hashnode</CopyRight>
        </Div>
    )
}

export default RightBarFooter
