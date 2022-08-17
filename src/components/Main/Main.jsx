import { useState } from 'react';
import Board from '../Board/Board';
import Users from '../Users/Users';
import './main.css';

function Main({ first, second }) {
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
        first={first}
        second={second}
      />
      <Users first={first} second={second} />
    </div>
  );
}

export default Main;
