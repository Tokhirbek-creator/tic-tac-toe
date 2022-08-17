import { useState } from 'react';
import Board from '../Board/Board';
import Users from '../Users/Users';
import './app.css';

function App() {
  const [reset, setReset] = useState(false);
  const [winner, setWinner] = useState('');

  const resetBoard = () => {
    setReset(true);
  };

  return (
    <div className="App">
      <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
        <div className="winner-text">{winner}</div>
        <button onClick={() => resetBoard()}>
          Reset Board
        </button>
      </div>
      <Board
        reset={reset}
        setReset={setReset}
        winner={winner}
        setWinner={setWinner}
      />
      <Users />
    </div>
  );
}

export default App;
