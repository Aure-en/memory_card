import React, { useState } from 'react'

function Score() {

  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const maxScore = 10

  const incrementScore = () => {
    setScore(prevScore => prevScore + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  const updateBest = () => {
    if (score > bestScore) {
      setBestScore(score)
    }
  }

  return (
    <>
      <div>Score: {score}</div>
      {(score === maxScore) && <small>Congratulations, you won! Click on any card to play again.</small>}
      <div>Best Score: {bestScore}</div>
    </>
  )
}

export default Score
