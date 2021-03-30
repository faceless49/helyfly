import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Gallery } from './components/blocks/gallery/Gallery';
import { Header } from './components/blocks/header/Header';
import { Main } from './components/blocks/main/Main';
import { Photoset } from './components/blocks/photoset/Photoset';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Main/>
      <Photoset/>
      <Gallery/>
    </div>
    </BrowserRouter>
  );
}


export default App;
