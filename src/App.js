import "./App.css";
import { Editor } from "./components/Editor/Editor";
import { Inputbox } from "./components/Editor/Inputbox";
import Sidebar from "./components/Sidebar";
import { Profile } from "./components/Profile/Profile";
import { UserForm } from "./components/UserForm/UserForm";
import { Router } from "./Router/Router";

function App() {
    return (
        <div className="App">
            <Router />
            {/* <Inputbox/> */}
            {/* <Sidebar />
      <UserForm/> */}
            {/* <Profile/> */}
        </div>
    );
}

export default App;
