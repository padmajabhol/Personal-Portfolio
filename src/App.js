import "./App.css";
import { Button, ButtonLabel } from "./components/Button.style";
import { AppContainer } from "./components/Styles/Container.style";
import Nav from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <AppContainer>
        <Nav />
        {/* <Button backgroundColor="red">
          <ButtonLabel>Hi</ButtonLabel>
        </Button>
        <Button backgroundColor="violet">Hi</Button> */}
      </AppContainer>
    </div>
  );
}

export default App;
