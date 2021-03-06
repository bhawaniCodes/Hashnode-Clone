import { TopSection } from "./TopSection";
import { BottomSection } from "./BottomSection";
import styled from "styled-components";

const Container = styled.div`
    width: 85%;
    float: right;
    background: #f5f7fa;
    margin-left: 2%;
`;

function Profile() {
    return (
        <Container>
            <TopSection/>
            <BottomSection/>
        </Container>
    );
}

export { Profile };