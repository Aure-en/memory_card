import React from 'react'
import Score from './Score'

function Header({score}) {
  return (
    <header className="container-fluid">
      <div className="row">
        <h1>Memory Card</h1>
        <Score score={score} />
      </div>
    </header>
  )
}

export default Header
