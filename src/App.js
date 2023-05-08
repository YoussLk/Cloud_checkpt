import './App.css';
import Nav from './component/nav';
import Map from './component/map';
import Footer from './component/footer';
import Home from './component/home';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          <Nav/>
          <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path='/map' Component={Map}/>
          </Routes>
          <Footer/>
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;