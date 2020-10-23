import React, { useState } from 'react';
import Game from './components/Game';
import Header from './components/Header'
import './style.css'

function App() {

  const [score, setScore] = useState(0)

  const getScore = (score) => {
    setScore(score)
  }

  return (
    <div className="App">
      <Header score={score} />
      <Game getScore={getScore} />
    </div>
  );
}

export default App;
