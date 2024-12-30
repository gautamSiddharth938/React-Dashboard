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
    <div>
      <Navbar />
      <div className="d-flex">

        <Sidebar />
        <div style={{ flex: '1', backgroundColor: '#020617', color: 'white', padding: '1px' }}>
          <span style={{fontSize: '15px', fontWeight: 'bolder', padding: '5px'}}>Dashboard</span>
          <div style={{ gridColumn: 'span 2', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '5px', padding: '5px', margin: '5px' }}>
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
