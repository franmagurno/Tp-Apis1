import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './Pages/LandinPage';
import SignIn from './Pages/SingIn';
import SignUp from './Pages/SignUp';
import Menu from './Pages/Menu';
import ChargeTicket from './Pages/ChargeTicket';
import CreateGroup from './components/CreateGroup';
import TeamMembers from './Pages/TeamMembers';
import StatsMenu from './Pages/StatsMenu';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta para la página de inicio */}
        <Route path="/" element={<LandingPage />} />
        
        {/* Ruta para la página de inicio de sesión */}
        <Route path="/signin" element={<SignIn />} />
        
        {/* Ruta para la página de registro */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Ruta para la página del menú */}
        <Route path="/menu" element={<Menu />} />
        
        {/* Ruta para la página de cargar ticket */}
        <Route path="/charge-ticket" element={<ChargeTicket />} />
        
        {/* Puedes agregar más rutas según lo necesites */}
        <Route path="/create-group" element={<CreateGroup />} />

        <Route path="/team-members" element={<TeamMembers />} />

        <Route path="/stats" element={<StatsMenu />} />

      </Routes>
    </Router>
  );
}

export default App;
