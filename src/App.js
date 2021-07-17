
import './App.css';
import { Button, ButtonLabel } from './components/Button.style';
import { AppContainer } from './components/Container.style';

function App() {
  return (
    <div className="App">
    <AppContainer>
    <Button backgroundColor="red"><ButtonLabel>Hi</ButtonLabel></Button>
    <Button backgroundColor="violet">Hi</Button>
    </AppContainer>
    </div>
  );
}

export default App;
