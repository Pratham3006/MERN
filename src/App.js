import React from 'react';
import { BrowserRouter,Route,Router,Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import axios from 'axios';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
      </BrowserRouter>
    </React.StrictMode>
    
  );
}

export default App;
