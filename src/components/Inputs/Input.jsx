/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import './input.css';

function Input({ setFirst, setSecond }) {
  const [redirectNow, setRedirectNow] = useState(false);

  return redirectNow ? (
    <Navigate to="/games" />
  ) : (
    <div className="form">
      <div className="title">Welcome</div>
      <div className="subtitle">Let's play Tic-Tac-Toe</div>
      <div className="input-container ic1">
        <input id="firstname" className="inpute" type="text" onChange={(e) => setFirst(e.target.value)} placeholder=" " />
        <div className="cut" />
        <label htmlFor="firstname" className="placeholder">1-st player name</label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="inpute" type="text" onChange={(e) => setSecond(e.target.value)} placeholder=" " />
        <div className="cut" />
        <label htmlFor="lastname" className="placeholder">2-nd player name</label>
      </div>
      <button type="text" onClick={() => setRedirectNow(true)} className="submit">submit</button>
    </div>
  );
}

export default Input;
