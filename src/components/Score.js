import React, { useState, useEffect } from 'react'

function Score({ score }) {

  const [bestScore, setBestScore] = useState(0)
  const maxScore = 10
  
  // Updates the best score if beaten
  useEffect(() => {
    if (score > bestScore) {
      setBestScore(score)
    }
  })

  return (
    <div className="score d-flex">
      {(score === maxScore) && <small className="text-center mr-3">Congratulations, you won!<br/>Click on any card to play again.</small>}
      <div className="mr-3">Score: {score}</div>
      <div>Best Score: {bestScore}</div>
    </div>
  )
}

export default Score
