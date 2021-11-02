import React from "react";
import styles from "./landing.module.css"
import styled from "styled-components";
import Sidebar from "../Sidebar";

const FlexBox = styled.div`
  display: flex;
  width: 96%;
  height: 100%;
  margin: auto;
`;
const NewBack = styled.div`
padding-top: 1rem;
padding-bottom: 1.2rem;
margin-right: 1rem;
height: 96%;
overflow-x: hidden;
z-index: 1;
position: fixed;
background-color: #F5F7FA;
`
const SideFlex = styled.div`
width: 100%;
background-color: #fff;
`

function Index() {
  return (
    <>
    <div className={styles.masterDiv}>
      <FlexBox>
        <NewBack><Sidebar/></NewBack>
        <SideFlex>World</SideFlex>
      </FlexBox>
      </div>
    </>
    
  );
}

export default Index;
