import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Team from './components/Team';
import { Route, Routes } from 'react-router-dom';
import Join_Form from './components/Join_Form';

function App() {
  return (
      <div>
        <Routes>
        <Route exact path='*' element={<Home />} />
        <Route exact path='/Team' element={<Team />} />
        <Route exact path="/Join_Form" element={<Join_Form/>}/>
        </Routes>
        {/* <Join_Form/> */}
      </div>
  );
}

export default App;
