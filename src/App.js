import './App.css';
import { Header } from './components/blocks/header/Header';
import { Main } from './components/blocks/main/Main';
import { Photoset } from './components/blocks/photoset/Photoset';
import { RatingBlock } from './components/ratingBlock/RatingBlock';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Photoset/>
      <RatingBlock/>
    </div>
  );
}


export default App;
