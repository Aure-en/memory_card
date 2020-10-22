import React, { useState, useEffect } from 'react'
import Card from './Card'
import cardData from '../cards_data/data'

function Cards() {

  const [cards, setCards] = useState([])

  //Set the initial cards up
  useEffect(() => {
    for (let i = 0 ; i < cardData.length ; i +=1) {
    setCards(cards => [...cards, <Card src={cardData[i].src} alt={cardData[i].alt} id={i}/>])
    }
  }, [])

  const shuffle = () => {
    setCards([...cards].sort(() => 0.5 - Math.random()))
    console.log(cards)
  }

  return (
    <main className="container-fluid">
      <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-5" onClick={shuffle}>
        { cards.map( (card) => <li className="col" key={card.props.id}>{card}</li> ) }
      </ul>
    </main>
  )
}

export default Cards
