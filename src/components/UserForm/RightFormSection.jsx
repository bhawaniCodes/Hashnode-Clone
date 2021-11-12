import styled from "styled-components";

const Container = styled.div`
    width: 50%;
`;

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
    margin-left: 2rem;
    margin-top: 25px;

    & > label {
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 600;
        margin-bottom: 8px;
    }

    & > input {
        border-radius: 0.5rem;
        height: 55px;
        border: none;
        border: 1px solid #e5e7eb;
        font-size: 100%;
        padding-left: 1rem;
    }

    & > input:focus {
        outline: none;
        outline: 1px solid #2962ff;
    }
`;

const Heading = styled.p`
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    margin-left: 2rem;
`;


function RightFormSection({addSocialData,social}) {
    return (
        <Container>
            <Heading>Social</Heading>
            <InputBox>
                <label>Twitter Profile</label>
                <input placeholder="https://twitter.com/johndoe" name="twitter" onChange={addSocialData} value={social.twitter}/>
            </InputBox>
            <InputBox>
                <label>Github Profile</label>
                <input placeholder="https://github.com/johndoe" name="github" onChange={addSocialData} value={social.github}/>
            </InputBox>
            <InputBox>
                <label>Facebook Profile</label>
                <input placeholder="https://facebook.com/johndoe" name="facebook" onChange={addSocialData} value={social.facebook}/>
            </InputBox>
            <InputBox>
                <label>Website URL</label>
                <input placeholder="https://your-website.com" name="websiteUrl" onChange={addSocialData} value={social.websiteUrl}/>
            </InputBox>
            <InputBox>
                <label>LinkedIn URL</label>
                <input placeholder="https://www.linkedin.com/in/johndoe" name="linkdin" onChange={addSocialData} value={social.linkedi}/>
            </InputBox>
        </Container>);
}

export { RightFormSection };