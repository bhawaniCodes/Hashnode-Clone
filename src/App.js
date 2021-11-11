
import './App.css';
import { Editor } from './components/Editor/Editor';
import { Inputbox } from './components/Editor/Inputbox';
import { Router } from "./Router/Router";

function App() {
  return (
      <div className="App">
          <Router />
          {/* <Inputbox/> */}
      </div>
  );
}

export default App;
