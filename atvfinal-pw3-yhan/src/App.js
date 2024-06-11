import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Home   from './pages/Home'
import Turmas from './pages/Turmas';
import EditTurma from './pages/EditTurma';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>

           <Route path='/' element={<NavBar/>}>

              <Route index element={<Home/>}/>

              <Route path='turmas' element={<Turmas/>}/>

              <Route path='editturma/:id' element={<EditTurma/>}/>

           </Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
