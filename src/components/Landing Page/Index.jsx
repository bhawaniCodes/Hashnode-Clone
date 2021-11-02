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
padding-bottom: 1.5rem;
margin-right: 1rem;
overflow-x: hidden;
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
