import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './screens/LandingPage';
import ApplicationRoutes from './routes/ApplicationRoutes';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage/>} />

        {/* if the route is anyother than the landing:
        Forwarding it to the Routes Component which consists of
        all page routes with a switch */}
        <Route path='*' element={<ApplicationRoutes/>} />
      </Routes>
    </Router>
  )
}

export default App;
