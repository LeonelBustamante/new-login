import React from 'react';
import Menu from './components/Sidebar/Menu';
import HomePage from './components/Pages/HomePage';
import './App.css'
function App() {
  return (
    <div className="App content">
      <Menu />
      <HomePage />
    </div>
  );
}

export default App;
