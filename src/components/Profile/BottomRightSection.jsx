import styled from "styled-components";

const Container = styled.div`
    border-radius: 0.5rem;
    width: 63%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    margin-left: 2%;
    border: 1px solid #e5e7eb;
    margin-bottom: 30px;
    padding-top: 1rem;

    & > p {
        font-size: 1.5rem;
        margin-top: 45px;
        margin-bottom: 25px;
    }
    & > img {
         width: 30%;
         margin-top: 55px;
    }

    & button {
        font-size: 1.125rem;
        line-height: 1.75rem;
        padding-left: 0.75rem;
        padding-right: 0.75rem;
        padding-top: 0.25rem;
        padding-bottom: 0.25rem;
        background: #2962ff;
        color: white;
        border: none;
        border-radius: 0.2rem;
        margin-top: 60px;
        margin-bottom: 60px;
    }

    & button:hover {
        box-shadow: 2px 3px 2px rgba(0,0,0,0.3);
    }
`;

const Card = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #e5e7eb;
    margin-top: 16px;
`;
const TopCard = styled.div`
    display: flex;
    align-items: flex-start;
    padding-left: 15px;
    & > img {
        width: 3rem;
        aspect-ratio: 1 / 1;
        border-radius: 1.5rem;
    }
    & > div {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
    }

    & > div > p{
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: .875rem;
        line-height: 1.25rem;
        color: #616161;
    }

    & > div > p:first-child{
        margin-bottom: 0px;
        margin-top: 0px;
        font-size: 1rem;
        font-weight: 600;
        color: #000000;
    }
`;

const MiddleCard = styled.div`
    display: flex;
    padding-left: 1rem;
`;

const TextArea = styled.div`
    width:  ${(props) => props.width};
    & > p {
        font-size: 1.125rem;
        color: #616161;
    }
    & > p:first-child {
        font-size: 1.875rem;
        font-weight: 600;
        color: inherit;
        margin-top: 10px;
    }
`;

const ImageArea = styled.div`
    width: ${(props) => props.width} ;
    & > img {
        width: 90%;
        margin-left: 5%;
        border-radius: 0.3rem;
    }
`;

const BottomCard = styled.div`
    display: flex;
    justify-content: space-between;
    color: #616161;

    & > div {
       width: 2.5rem;
    }
`;

const LikeAndComment = styled.div`
    display: flex;
    padding-left: 1rem;

    & > div {
        display: flex;
        margin-right: 1rem;
    }

    & > div > p{
        margin-top: 0px;
        font-weight: 600;
        margin-left: 0.5rem;
    }
`;

const data = [
    {
        title: "What You Need To Know About Scope in JavaScript - No Buzzwords",
        body: "We declare variables in every JavaScript file and we want to use those variables in our codebase. When we declare a variable in a function, it's scope is only limited to the function.",
        link: "mohit.hasnode.com",
        like: 3,
        comments: 4,
        date: "Nov 3, 2021",
        image: "https://user-images.githubusercontent.com/35700009/139771831-044f1bee-935e-4413-bd62-65481c0d211d.jpg",
        name: "Mohit Maurya",
        cover_image: "https://ajibolasegun.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1635878703044%2FvnYXbQdLPf.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=1920&q=75"
    },
    {
        title: "What You Need To Know About Scope in JavaScript - No Buzzwords",
        body: "We declare variables in every JavaScript file and we want to use those variables in our codebase. When we declare a variable in a function, it's scope is only limited to the function.",
        link: "mohit.hasnode.com",
        like: 3,
        comments: 4,
        date: "Nov 3, 2021",
        image: "https://user-images.githubusercontent.com/35700009/139771831-044f1bee-935e-4413-bd62-65481c0d211d.jpg",
        name: "Mohit Maurya"
    }
];

function BottomRightSection() {
    return (
        <Container>
            {
                data.length === 0 ?
                    <>
                        <p>There doesn't seem to be anything here!</p>
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1578643371608/0EHh_xFuP.png?auto=compress" alt="nothing" />
                        <button>Go To Feed</button>
                    </>
                    :
                    <>
                        {
                            data.map((el,i) =>
                                <Card key={i}>
                                    <TopCard>
                                        <img src={el.image} alt="profile" />
                                        <div>
                                            <p>{el.name}</p>
                                            <p>{el.date}</p>
                                        </div>
                                    </TopCard>
                                    <MiddleCard>
                                        <TextArea width={el.cover_image ? "60%" : "100%"}>
                                            <p>{el.title}</p>
                                            <p>{el.body}</p>
                                        </TextArea>
                                        <ImageArea width={el.cover_image ? "40%" : "0%"}>
                                            <img src={el.cover_image} alt=""/>
                                        </ImageArea>
                                    </MiddleCard>
                                    <BottomCard>
                                        <LikeAndComment>
                                            <div>
                                                <span class="material-icons">thumb_up</span>
                                                <p>{el.like}</p>
                                            </div>
                                            <div>
                                                <span class="material-icons">comment</span>
                                                <p>{el.comments}</p>
                                            </div>                    
                                        </LikeAndComment>
                                        <div>
                                            <span class="material-icons">bookmark_boder</span>
                                        </div>
                                    </BottomCard>
                                </Card>)
                        }
                    </>
            }
        </Container>
    );
}

export { BottomRightSection };