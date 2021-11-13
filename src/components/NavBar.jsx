import React from 'react'
import styled from "styled-components";
import Announcement from './Announcement';
import Footer from './Footer';
import { v4 as uuid } from 'uuid';
import { useHistory, useLocation } from "react-router";

const NavDiv = styled.div`
position: -webkit-sticky;
  position: sticky;
  top: 0;
display: flex;
justify-content: space-between;
    width: 97.5%;
    height:70px;
    border-bottom: 0.5px solid #E5E7EB;
    padding: 20px 15px 0 15px;
    background-color: #fff;
    z-index: 9;
    
`
const Button = styled.button`
//   display: flex;
  width: auto;
  height: 47px;
  font-weight: 600;
  font-size: 18px;
  background-color: #2962ff;
  color: #fff;
  fill: #fff;
  border: none;
  border-radius: 10px;
  padding-left: 1rem;
  padding-right: 1rem;
  cursor: pointer;
  &:hover{
    background-color: rgb(41,98,255,0.8);
}
`
const FlexBox = styled.div`
width:70%;
margin: auto;
padding: 70px;
display: flex;
justify-content: space-between;
`
const TransperentButton = styled.button`
//   display: flex;
  width: 6rem;
  height: 47px;
  font-weight: 600;
  font-size: 18px;
  background-color: none;
  color: #808080;
  // fill: #fff;
  border: 1px solid #E5E7EB;
  border-radius: 10px;
//   padding-left: 1.9rem;
//   padding-right: 1rem;
  cursor: pointer;
  &:hover{
    background-color: rgb(41,98,255,0.8);
}
`
const SubTitle = styled.div`
padding: 15px 35px 15px 35px;
font-Size: 18px;
color: gray;
font-weight: 600;
text-align:left;
`
const Title = styled.div`
padding-left: 35px;
font-Size: 14px;
text-align:left;
color: #333333;
`
const TitleDivMap = styled.div`
font-Size: 14px;
text-align:left;
color: #333333;
`
const Div = styled.div`
display: flex;
column-gap: 1rem;
`
const TitleDiv = styled.div`
width: 45%;
margin: auto;
font-size:42px;
font-weight: 700;
padding-top: 80px;
`
const Sub = styled.div`
width:28%;
padding: 15px 15px 35px 15px;
margin:auto;
font-Size: 18px;
color: gray;
font-weight: 600;
`
const Image = styled.img`
width:150px;
height:150px;
`
const Imageuser = styled.img`
width:150px;
height:150px;
border: 1px solid #E5E7EB;
`
const FlexUserBox = styled.div`
margin: auto;
padding: 30px;
border-radius: 10px;
width: 60%;
display: flex;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`
const FlexUserBoxDiv = styled.div`
margin: auto;
padding: 30px;
border-radius: 10px;
width: 60%;
display: flex;
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
margin-bottom: 40px;
`
const Content = styled.div`
padding: 40px;
display:flex;
width: 70%;
margin: auto;
justify-content: space-between;
`
const Box = styled.div`
font-size: 42px;
font-weight: 700;
`
const NewBox = styled.div`
padding: 40px;
font-size: 42px;
font-weight: 700;
`

const DataFlexBox = styled.div`
  display: flex;
  width: 45%;
  height: 150px;
  column-gap: 15px;
  height: auto;
  margin: auto;
  padding: 20px 10px 40px 10px;
//   border-bottom: 0.5px solid #E5E7EB;
  // justify-content: space-between;
`;
const SubTitleKey = styled.div`
margin:0px;
padding:0px;
font-Size: 15px;
color: gray;
text-align:left;
`
const Display = styled.div`
width:80%;
margin: auto;
display: flex;
flex-wrap: wrap;
`
const H3 = styled.h3`
margin:0px;
padding: 0px;
text-align:left;
`
const ImageStyle = styled.img`
width:70px;
height:70px;
border-radius: 50px;
`
const userBlog = [
  {
      id: uuid(),
      image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1629491977237/-u6Aaer6v.png?w=200&h=200&fit=crop&crop=faces&auto=compress",
      desc : "Software Engineer at Appinio Husband. Father. Egyptian based in Germany. Love Driving Cars.",
      subname: "📽️",
      name: "Basim Hennawi",
      link: "blog.basimhennawi.com"
  },
  {
    id: uuid(),
    image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1598688712924/HZ_m169wn.png?w=200&h=200&fit=crop&crop=faces&auto=compress",
    desc : "Machine Learning Engineer - Technical Writer-ish - Interested in Software Testing, Best Practices, Scalability, and Python.",
    subname: "📽️",
    name: "Miguel Brito",
    link: "miguendes.me"
},
{
  id: uuid(),
  image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1630661606746/ws_fP3uXs.jpeg?w=200&h=200&fit=crop&crop=faces&auto=compress",
  desc : "Writer . YouTuber . Creator . Mentor | Let's Connect",
  subname: "📽️",
  name: "Tapas Adhikary",
  link: "blog.greenroots.info"
},
{
  id: uuid(),
  image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1592617052267/KUaHl6HMa.png?w=200&h=200&fit=crop&crop=faces&auto=compress",
  desc : "I'm a web/software developer who loves to build projects and share valuable tips for new programmers on this blog. Feel free to reach me ...",
  subname: "📽️",
  name: "Victoria Lo",
  link: "lo-victoria.com"
},
{
  id: uuid(),
  image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1627404475851/24u-J4UH6.jpeg?w=200&h=200&fit=crop&crop=faces&auto=compress",
  desc : "Data Scientist &amp; Web Developer. I have a passion for discovering and working with cutting-edge technology. I am a constant and quick ...",
  subname: "📽️",
  name: "Travis Horn",
  link: "travishorn.com"
},
{
  id: uuid(),
  image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1625481244426/ihj4R-Qy-.png?w=200&h=200&fit=crop&crop=faces&auto=compress",
  desc : "Principal Cloud Consultant, AWS Partner Ambassador &amp; Community Builder. Writing articles about Amazon Web Services.",
  subname: "📽️",
  name: "Danny Steenman",
  link: "towardsthecloud.com"
},
{
id: uuid(),
image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1629491977237/-u6Aaer6v.png?w=200&h=200&fit=crop&crop=faces&auto=compress",
desc : "Writing about Vue, Node.Js, AWS, JavaScript, Cloud Computing and Software Development I am also active on these platforms",
subname: "📽️",
name: "Catalin Pit",
link: "catalins.tech"
},
{
id: uuid(),
image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1633314955835/t_om8OfjH.png?w=200&h=200&fit=crop&crop=faces&auto=compress",
desc : "I help founders bring their ideas to life, from incorporation to acquisition, and every step in between. BEng + JD + MBA",
subname: "📽️",
name: "Ajay Krishnan",
link: "ideas.krishnan.ca"
},
{
id: uuid(),
image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1636477003178/8zRj3KMt8.jpeg?w=200&h=200&fit=crop&crop=faces&auto=compress",
desc : "Golang software development and training. For information and rates: paul.digi4n@gmail.com",
subname: "📽️",
name: "Paul Di Gian",
link: "pauldigian.hashnode.dev"
},
{
  id: uuid(),
  image:"https://cdn.hashnode.com/res/hashnode/image/upload/v1602401666298/mU7IqqPmG.jpeg?w=200&h=200&fit=crop&crop=faces&auto=compress",
  desc : "Software Developer and Technical Writer",
  subname: "📽️",
  name: "Madza",
  link: "madza.hashnode.dev"
  },
]
function NavBar() {

      const history = useHistory();
    return (
      <>
        <NavDiv>
            <SubTitle>Blogging as a developer, done right!</SubTitle>
            <Div>

            <TransperentButton onClick={()=>history.push('/login') }>Login</TransperentButton>
            <Button onClick={()=>history.push('/login') }>Creae an account</Button>
            </Div>
        </NavDiv>
        <Announcement/>
        <TitleDiv>Everything You need to start blogging as developer!</TitleDiv>
        <Sub>Own your content, share ideas, and
connect with the global dev community!</Sub>
<Button onClick={()=>history.push('/create/story') }>Start your personal blog for FREE</Button>
<FlexBox>
  <div>
  <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1617966064696/8sIqDnO_D.png?auto=compress" alt="img"/>
  <SubTitle>Start a developer blog</SubTitle>
  </div>
  <div>
  <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1617966048095/gLI2PwkXE.png?auto=compress" alt="img"/>
  <SubTitle>Map your custom domain</SubTitle>
  </div>
  <div>
  <Image src="https://cdn.hashnode.com/res/hashnode/image/upload/v1617966002659/238amul_D.png?auto=compress" alt="img"/>
  <SubTitle>Connect with community</SubTitle>
  </div>
</FlexBox>
<FlexUserBox>
  <Imageuser src="https://cdn.hashnode.com/res/hashnode/image/upload/v1576679206479/VBY2uZMOie.jpeg?w=200&h=200&fit=crop&crop=faces&auto=format" alt="user"/>
  <div>
    <SubTitle style = {{color:"black"}}>"You can start a blog in just a few seconds using Hashnode and then you can move that to your own domain if you get one later. They will even help distribute your articles on their platform. By far the best place to create a blog, imho."</SubTitle>
    <Title>Quincy Larson,</Title>
    <Title>Founder, freeCodeCamp</Title>
  </div>
</FlexUserBox>
<Content>
  <div>
    <Box>What? 👀</Box>
    <SubTitle>Hashnode is a free developer blogging platform that allows you to publish articles on your own domain and helps you stay connected with a global developer community.</SubTitle>
  </div>
  <div>
    <Box>Why? 😍</Box>
    <SubTitle>This gives you a huge advantage: Google and other search engines send traffic directly to your domain, and Hashnode community members discover your articles on their feed.</SubTitle>
  </div>
</Content>
<FlexUserBox>
  <Imageuser src="https://cdn.hashnode.com/res/hashnode/image/upload/v1636364350552/i6QmUq7eq.jpeg?auto=compress" alt="user"/>
  <div>
    <SubTitle style = {{color:"black"}}>"It's amazing to see how fast devs go from 0 to Blog under a domain they own on Hashnode 🤯. It reminds me a lot of what Substack did for journalists"</SubTitle>
    <Title>Guillermo Rauch,</Title>
    <Title>CEO at Vercel.</Title>
  </div>
</FlexUserBox>
      <NewBox>Trending Bloggers This Week</NewBox>

      <Display>
      {
                    userBlog.map((e)=>{
                        return(<DataFlexBox key={e.id}>
                            <ImageStyle src={e.image} alt="avneesh" width="50px" height="50px" />
                            <div>
                                <H3>{e.name}</H3>
                                <SubTitleKey>{e.link}</SubTitleKey>
                                <TitleDivMap>{e.desc}</TitleDivMap>
                            </div>

                            </DataFlexBox>
                        )
                        
})
                }

      </Display>

      <FlexUserBoxDiv>
  <Imageuser src="https://jamesqquick.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1584725566758%2FW2boEyqqw.png%3Fw%3D400%26h%3D400%26fit%3Dcrop%26crop%3Dfaces%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=828&q=75" alt="user"/>
  <div>
    <SubTitle style = {{color:"black"}}>"Just started out on Hashnode about 1 month ago, and I'm already at 14,000 page views. Really impressed with how much visibility I've gotten there!"</SubTitle>
    <Title>James Q Quick,</Title>
    <Title>Senior Developer Advocate at Auth0</Title>
  </div>
</FlexUserBoxDiv>
<Footer/>
        </>
    )
}

export default NavBar
