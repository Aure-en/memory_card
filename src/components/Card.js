import React from 'react'

function Card({src, alt}) {

  return (
    <div className="card">
      <img src={src} alt={alt} />
    </div>
  )
}

export default Card
