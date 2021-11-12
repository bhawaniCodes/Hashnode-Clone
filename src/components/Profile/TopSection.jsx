import styled from "styled-components";


const Container = styled.div`
background: #ffffff;
width: 95%;
border-bottom-right-radius: 0.5rem;
border-bottom-left-radius: 0.5rem;
border: 1px solid #e5e7eb;`

const CoverImage = styled.div`
   background-image: url("https://cdn.hashnode.com/res/hashnode/image/upload/v1584035951809/rA6njTVVd.jpeg?w=1600&fit=crop&crop=entropy&auto=compress&auto=compress");
   height: 350px;
   width: 100%;
   background-position: center;
   background-size: cover;
`;

const ProfileImage = styled.div`
    width: 15%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    background: #ffffff;
    margin-top: -90px;
    margin-left: 20%;

    & > img {
        width: 95%;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        margin-left: 2.5%;
        margin-top: 2.5%;
    }
`;

const Information = styled.div`
    height: 217px;
    margin-top: -70px;
`;

const Name = styled.div`
    width: 180px;
    margin-left: 38%;
    width: 62%;
    
    & > h1 {
        font-size: 1.875rem;
        margin-top: 0px;
        margin-bottom: 0px;
    }

    & > p {
        color: grey;
        font-size: 1.125rem;
        line-height: 1.75rem;
        margin-top: 5px;
    }
`;

const Button = styled.div`
    border: 1px solid #5f89ff;
    border-radius: 0.5rem;
    border-width: 1px;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.25rem;
    padding-bottom: 0.25rem;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 500;
    line-height: 1.625;
    display: flex;
    align-items: center;
    width: 80px;

    & > span {
        font-size: 1rem;
        color: #5f89ff;
        margin-left: 5px;
    }
`;

const Slider = styled.div`
    width: 100%;
    margin-top: 50px;
    height: 40px;
    display: flex;
    justify-content: center;

    & > span {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        font-size: .875rem;
        line-height: 1.25rem;
        font-weight: 700;
        letter-spacing: .05em;
        cursor: pointer;
        height: 30px;
        padding-top: 0.5rem;
    }

    & > span:hover {
        background: lightgray;
    }
      & > span:after{
        border-bottom: 2px solid black;
    }
`;

const EditButton = styled.div`
    font-size: 1rem;
    font-weight: 500;
    width: 7rem;
    padding: 0.3rem 0.5rem 0.3rem 0.5rem;
    color: #374151;
    margin-top: 50px; 

    &:hover {
        background-color: #e5e7eb;
        cursor: pointer;
    }
    & > svg {
        width: 1.2rem;
        margin-right: 10px;
        fill: #373737;
    }
`;

function TopSection() {
    const myId = false;
    const anotherId = "618cde6fe1cacf3b94d730ca  6183abda180f196b316a3e52";
    
    return (
        <Container>
            <CoverImage>
            </CoverImage>
            <ProfileImage>
                <img src="https://user-images.githubusercontent.com/35700009/139771831-044f1bee-935e-4413-bd62-65481c0d211d.jpg" alt="profile"/>
            </ProfileImage>
            <Information>
                <Name>
                    <h1>Mohit Maurya</h1>
                    {
                        myId === true ?
                              <EditButton>
                                <svg viewBox="0 0 512 512"><path d="M493.255 56.236l-37.49-37.49c-24.993-24.993-65.515-24.994-90.51 0L12.838 371.162.151 485.346c-1.698 15.286 11.22 28.203 26.504 26.504l114.184-12.687 352.417-352.417c24.992-24.994 24.992-65.517-.001-90.51zm-95.196 140.45L174 420.745V386h-48v-48H91.255l224.059-224.059 82.745 82.745zM126.147 468.598l-58.995 6.555-30.305-30.305 6.555-58.995L63.255 366H98v48h48v34.745l-19.853 19.853zm344.48-344.48l-49.941 49.941-82.745-82.745 49.941-49.941c12.505-12.505 32.748-12.507 45.255 0l37.49 37.49c12.506 12.506 12.507 32.747 0 45.255z"></path></svg>
                                Edit Profile
                            </EditButton> :
                            <>
                                <p>What if, books could talk? Check out Primerlabs.io</p>
                                <Button>
                                    <span class="material-icons" style={{fontSize:"1.5rem",maginLeft:"0px"}}>control_point</span>
                                    <span>Follow</span>
                                </Button>
                            </>
                    }
                </Name>
                <Slider>
                    <span style={{borderBottom: "2px solid #2962ff"}}>PROFILE</span>
                    <span>FOLLOWERS</span>
                    <span>FOLLOWING</span>
                </Slider>
            </Information>
        </Container>
    )
}

export { TopSection };