import { BottomLeftSection } from "./BottomLeftSection";
import { BottomRightSection } from "./BottomRightSection";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 15px;
    display: flex;
`;

function BottomSection() {
    return (
        <Container>
            <BottomLeftSection />
            <BottomRightSection/>
        </Container>
    );
}

export { BottomSection };