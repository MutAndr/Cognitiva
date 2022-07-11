import React from 'react';
import './App.css';
import './reset.css';
import Card from './Card/Card';
import brainLogo from './img/brainlogo.png';
import logo from './img/Cognitiva-logo.svg';


function App() {
  return (
    <div className='App'>
      <header className='header'>
        <div className='container'>
          <div className='header-row'>
            <div className='header-name'>Cognitiva</div>
            <div className='header-logo'><img src={logo} alt='logo' /></div>
          </div>
        </div>             
      </header>
      <main>
        <div className='container'>
          <div className='cards-pool'>
            <Card />
          </div>
          <div className='brainlogo-pool'>
            <img src={brainLogo} className='brain-logo' alt='brain-logo' />
          </div>
        </div>
      </main>
      <footer>
      </footer>
    </div>
  );
}

export default App;
