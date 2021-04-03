import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Gallery } from './components/blocks/gallery/Gallery';
import { Header } from './components/blocks/header/Header';
import { Main } from './components/blocks/main/Main';
import { Photoset } from './components/blocks/photoset/Photoset';
import { Hero } from './components/blocks/hero/Hero';
import { TimeTable } from './components/blocks/timeTable/TimeTable';
import { MapBlock } from './components/blocks/map/MapBlock';
import { SlideBox } from './components/blocks/slideBox/SlideBox';
import { FeedbackBlock } from './components/blocks/feedbackBlock/FeedbackBlock';
import { Footer } from './components/blocks/footer/Footer';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Main/>
      <Photoset/>
      <Gallery/>
      <Hero/>
      <TimeTable/>
      <MapBlock/>
      <SlideBox/>
      <FeedbackBlock/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}


export default App;
