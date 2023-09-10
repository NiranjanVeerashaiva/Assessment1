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
        <Route path='/Assessment1' element={<Home/>}/>
        <Route path='/Assessment01' element={ <Data1 />}/>
        <Route path='/Assessment02' element={ <Data2 />}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
