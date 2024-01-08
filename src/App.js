import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Team from './components/Team';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
        <Routes>
        <Route exact path='*' element={<Home />} />
        <Route exact path='/Team' element={<Team />} />
        </Routes>
      </div>
  );
}

export default App;
