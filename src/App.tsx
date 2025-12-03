import './App.css';
import { Heading } from './components/heading/Heading';
import { NavBar } from './components/navBar/NavBar';

import './styles/theme.css';
import './styles/global.css';
import { TimerIcon } from 'lucide-react';

function App() {
  return (
    <>
    <Heading> Olá!! 
      <button>
        <TimerIcon/>
      </button>

    </Heading>
    </>
  );
}
export default App;
