import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
import Home from './pages/Home';
//import Navbar from './components/Navbar';
import UniversityDashboard from './pages/UniversityDashboard';
//import UniNavbar from './components/UniNavbar';
import UniLogin from './pages/UniLogin';
import UniSignup from './pages/UniSignup';
import StuLogin from './pages/StuLogin';
import StuSignup from './pages/StuSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
       <div>
        <Routes>
          <Route
            path='/'
            element={<Home/>} 
          />
          <Route
            path='/StuLogin'
            element={<StuLogin />} 
          />
          <Route
            path='/StuSignup'
            element={<StuSignup />} 
          />
          <Route
            path='/UniLogin'
            element={<UniLogin/>} 
          />
          <Route
            path='/UniSignup'
            element={<UniSignup/>} 
          />
          <Route
            path='/UniversityDashboard'
            element={<UniversityDashboard />} 
          />
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
