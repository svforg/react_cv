import './App.scss';
import {Header} from './components/Header/Header'
import {Main} from './components/Home/Main/Main'
import {Footer} from './components/Footer/Footer'
import {ScrollTop} from './components/shared/ScrollTop/ScrollTop'
import {CanvasBG} from './components/shared/CanvasBG/CanvasBG'

const App = () => {

  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
      <ScrollTop/>

    </div>
  );
};

export default App;
