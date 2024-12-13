import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './components/UserDetails';
import RepoDetails from './components/RepoDetails';


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route path="/repo/:username/:repo" element={<RepoDetails />} />
      </Routes>
    </Router>
  );
};

export default App;


