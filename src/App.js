import './App.css';
import { Header } from './components/blocks/header/Header';
import { Main } from './components/blocks/main/Main';
import { Photoset } from './components/blocks/photoset/Photoset';
function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Photoset/>
    </div>
  );
}


export default App;
