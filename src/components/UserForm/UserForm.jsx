import styled from "styled-components";
import { UserSettings } from "./UserSettings";
import { FormContainer } from "./FormContianer";

const Container = styled.div`
    width: 75rem;
    background: #f5f7fa;
    display: flex;
    padding: 0.5rem;
`;

function UserForm() {
    return (
        <Container>
            <UserSettings />
            <FormContainer/>
        </Container>);
}

export { UserForm };