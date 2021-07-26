import "./App.css";
import { AppContainer } from "./components/Styles/Container.style";
import Nav from "./components/Navbar/Navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <AppContainer>
          <Nav />
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
