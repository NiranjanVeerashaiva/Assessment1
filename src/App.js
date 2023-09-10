import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Data2 from './components/assessment02';
import Data1 from './components/assessment1';
import Home from './components/home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Assessment1' element={ <Data1 />}/>
        <Route path='/Assessment2' element={ <Data2 />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
