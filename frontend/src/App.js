import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home from './pages/Home';
import UniversityDashboard from './pages/UniversityDashboard';
import UniLogin from './pages/UniLogin';
import UniSignup from './pages/UniSignup';
import StuLogin from './pages/StuLogin';
import StuSignup from './pages/StuSignup';
import CareerQuiz from './pages/CareerQuiz';
import AllCourses from './pages/AllCourses';

function App() {
  const { user } = useAuthContext();

  return (
    <div>
      <BrowserRouter>
       <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/StuSignup' element={ <StuSignup /> } />
          <Route path='/StuLogin' element={ <StuLogin /> } />
          <Route path='/CareerQuiz' element={ user ? <CareerQuiz/> : <Navigate to="/StuLogin" />} />
          <Route path='/UniSignup' element={ <UniSignup/> } />
          <Route path='/UniLogin' element={ <UniLogin/> } />
          <Route path='/UniversityDashboard' element={ user ? <UniversityDashboard/> : <Navigate to="/UniLogin" />} />
          <Route path='/AllCourses' element={ <AllCourses/> } />
        </Routes>
       </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
