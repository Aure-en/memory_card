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
    <>
      <div>Score: {score}</div>
      {(score === maxScore) && <small>Congratulations, you won! Click on any card to play again.</small>}
      <div>Best Score: {bestScore}</div>
    </>
  )
}

export default Score
