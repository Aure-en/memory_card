import React, { useState } from 'react'

function Card({src, alt, handleClick}) {

  const [clicked, setClicked] = useState(false)

  return (
    <div className="card" onClick={handleClick}>
      <img className="card-img-top" src={src} alt={alt} />
    </div>
  )
}

export default Card
