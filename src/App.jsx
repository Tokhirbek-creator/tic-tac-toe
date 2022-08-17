import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Input from './components/Inputs/Input';
import Main from './components/Main/Main';

function App() {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  return (
    <Routes>
      <Route path="/" element={<Input setFirst={setFirst} setSecond={setSecond} />} />
      <Route path="/games" element={<Main first={first} second={second} />} />
    </Routes>
  );
}

export default App;
