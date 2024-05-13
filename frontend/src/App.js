import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages & components
//import Home from './pages/Home';
//import Navbar from './components/Navbar';
import UniversityDashboard from './pages/UniversityDashboard';
import UniNavbar from './components/UniNavbar';

function App() {
  return (
    <div>
      <BrowserRouter>
       <UniNavbar/>
       <div>
        <Routes>
          <Route
            path='/'
            element={<UniversityDashboard />} 
          />
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
