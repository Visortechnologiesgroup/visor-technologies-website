import React from 'react';
import './App.css';
/*
import Navbar from './component/Navbar/Navbar';
*/
import { BrowserRouter as Router } from 'react-router-dom'
/*
import Sidebar from './component/Sidebar/Sidebar';
*/
import Home from './component/pages/Page';

function App() {


  return (
    <Router>
      <Home />
    </Router>
  );
}

export default App;
