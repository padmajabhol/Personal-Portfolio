import "./App.css";
import { AppContainer } from "./components/Styles/Container.style";
import Nav from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Nav />
      </AppContainer>
    </div>
  );
}

export default App;
