import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className='main'>
        <div id='menu'>
          <a href='#' id='menu-items'>
            <span className='menu-item'>H</span>
            <span className='menu-item'>O</span>
            <span className='menu-item'>M</span>
            <span className='menu-item'>E</span>
          </a>
          <a href='#' id='menu-items'>
            <span className='menu-item'>P</span>
            <span className='menu-item'>A</span>
            <span className='menu-item'>I</span>
            <span className='menu-item'>N</span>
            <span className='menu-item'>E</span>
            <span className='menu-item'>L</span>
          </a>
          <a href='#' id='menu-items'>
            <span className='menu-item'>M</span>
            <span className='menu-item'>E</span>
            <span className='menu-item'>T</span>
            <span className='menu-item'>O</span>
            <span className='menu-item'>D</span>
            <span className='menu-item'>O</span>
            <span className='menu-item'>L</span>
            <span className='menu-item'>O</span>
            <span className='menu-item'>G</span>
            <span className='menu-item'>I</span>
            <span className='menu-item'>A</span>
          </a>
          <a href='#' id='menu-items'>
            <span className='menu-item'>S</span>
            <span className='menu-item'>O</span>
            <span className='menu-item'>B</span>
            <span className='menu-item'>R</span>
            <span className='menu-item'>E</span>
          </a>
        </div>
        <div id='menu-background-pattern'></div>
      </main>
    </>
  );
}

export default App;
