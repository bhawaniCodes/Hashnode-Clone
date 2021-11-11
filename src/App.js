import { Profile } from "./components/Profile/Profile";
import Sidebar from "./components/Sidebar";
import styled from "styled-components";
// import {UserForm} from "./components/UserForm/UserForm";

const Container = styled.div`
display: flex`;

function App() {
  return (
    <Container>
      <Sidebar/>
     <Profile/>
    </Container>
  );
}

export default App;
