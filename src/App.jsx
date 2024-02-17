import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProjectDetails from './ProjectDetails';
import Resume from './Resume';
import Templateblack from './Templateblack';
import Portfolio from './Portfolio';
import Projectapi from './Projectapi';
import UserForm from './WRITE/Users';
import Navbar from './Navbar';
import MainNav from './MainNav';
import Appp from './Portfolio-Website/src/App';
import MNavbar from './MainNav';
import Resume22 from './Resume22';
import Login from './pages/Login';
import { useState } from 'react';
import { UserProvider } from './UserContext';
import TemplateSelector from './pages/TemplateSelector';
import { fetchData } from './Portfolio-Website/src/constants';
import RegistrationForm from './pages/Registration';
import Home from './pages/Home';

const App = () => {
  fetchData();
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };
  return (
    <>
    
    <UserProvider>
    <Router>
    <MNavbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userForm" element={<UserForm />} />
        <Route path="/project/:projectId" element={<ProjectDetails />} />
        <Route path="/template2" element={<Appp />} />

        <Route path="/projectapi" element={<Projectapi />} />
        <Route path="/project" element={<ProjectDetails />} />
        <Route path="/portfolio/:username" element={<Portfolio />} />
        <Route path="/template1" element={<Templateblack />} />
        <Route path="/templateSelector" element={<TemplateSelector />} />
        <Route path="/registration" element={<RegistrationForm />} />
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        {/* <Route
          path="/dashboard/:username"
          element={<DashboardPage user={loggedInUser} onLogout={handleLogout} />}
        /> */}
      
      </Routes>
      

      
      {/* Additional components or content */}
    </Router>
    </UserProvider>
    
    </>
  );
};

export default App;
