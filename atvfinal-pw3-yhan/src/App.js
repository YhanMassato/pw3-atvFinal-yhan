import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home   from './pages/Home'
import Turmas from './pages/Turmas';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

          <Route index element={<Home/>}/>

          <Route path='turmas' element={<Turmas/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
