import React from 'react'
import Score from './Score'

function Header({score}) {
  return (
    <header className="container-fluid">
      <div className="row d-flex justify-content-between align-items-center mx-3 py-1">
        <h1>Memory Card</h1>
        <Score score={score} />
      </div>
    </header>
  )
}

export default Header
