import React from 'react';
import './App.css';
import Accounts from './Components/Accounts';
import Graph from './Components/Graph';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Profit from './Components/Profit';
import CustomerFeedback from './Components/CustomerFeedback';
import Menu from './Components/Menu';
import Cards from './Components/Cards';

function App() {
  return (
    <div className='app-container'>
      <Navbar />
      <div className="main-content">
        <div className="side-content">
          <Sidebar />
        </div>
        <div className='dashboard' >
          <span className='dashboard-heading' >Dashboard</span>
          <div className='dashboard-content' >
            <Cards />
            <Profit />
            <Graph />
            <Menu />
            <Accounts />
            <CustomerFeedback />
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
