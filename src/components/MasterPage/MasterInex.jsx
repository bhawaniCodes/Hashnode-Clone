import React from "react";
import styles from "./masterIndex.module.css"
import styled from "styled-components";
import Sidebar from "../Sidebar";
import RightSideBar from "../RightSideBar";
import AfterLoginCenter from "../AfterLoginCenter";
import MainPage from "../MainPage";

const FlexBox = styled.div`
  display: flex;
  width: 96%;
  height: 100%;
  margin: auto;
  position: relative;
`;
const NewBack = styled.div`
width: 12%;
padding-top: 1rem;
padding-bottom: 1.5rem;
// margin-right: 1rem;
overflow-x: hidden;
position: fixed;
background-color: #F5F7FA;
z-index:10;
`
const SideFlex = styled.div`
width: 61.5%;
margin: auto;
margin-right: 1%;
margin-top: 1%;
`


function MasterIndex() {
  return (
    <>
    <div className={styles.masterDiv}>
      <FlexBox>
        <NewBack><Sidebar/></NewBack>
        <MainPage/>
      </FlexBox>
      </div>
    </>
    
  );
}

export default MasterIndex;
