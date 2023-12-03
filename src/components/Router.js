import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; 
import Login from './Login';
import ResumeStyles from './ResumeStyles';
import ResumeEditor from './ResumeEditor';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/styles" element={<ResumeStyles />} />
        <Route path="/edit" element={<ResumeEditor />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
