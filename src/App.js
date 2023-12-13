// import logo from './logo.svg';
import { BrowserRouter as Router } from "react-router-dom";
import PagesManager from "./components/PagesManager";
import "./App.css";

function App() {
  let content;
  // if (user === 'ProjectManager') 
  if(true)
  {
      content = <PagesManager />
  } else {
      content = <>Login</>
  }
    return (
        <Router>
            <div >{content}</div>
        </Router>
    );
}

export default App;
