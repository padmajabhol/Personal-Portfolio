import "./App.css";
import { AppContainer } from "./components/Styles/Container.style";
import Nav from "./components/Navbar/Navbar";
import Landing from "./Pages/landing";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppContainer>
          <Nav />
          <Landing />
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
