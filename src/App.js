
import './App.css';
import NavBar from './components/NavBar';
import { Route, Routes, Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import AboutUs from './pages/AboutUs';

function App() {
  return (
   <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Navigate to='/home' replace/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/aboutus" element={<AboutUs />} />
    </Routes>
    
   </div>
  );
}

export default App;
