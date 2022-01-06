import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/nav/Nav';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Jobs />} />
        <Route path="/details" element={<JobDetail />} />
      </Routes>
    </div>
  );
}

export default App;
