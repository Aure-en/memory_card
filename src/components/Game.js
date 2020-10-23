import React, { useState, useEffect } from 'react'
import Card from './Card'
import data from '../cards_data/data'

function Game({ getScore }) {

  const [cards, setCards] = useState([])
  const [clicked, setClicked] = useState([])

  // Set the initial cards up
  useEffect(() => {
    for (let i = 0 ; i < data.length ; i +=1) {
    setCards(cards => [...cards, {
      card: <Card src={data[i].src} alt={data[i].alt}/>,
      id: i
    }])
    }
  }, [])

  // Shuffle the cards after each click
  useEffect(() => {
    setCards(cards => [...cards].sort(() => 0.5 - Math.random()))
  }, [clicked])


  // Keeps track of which card was clicked on
  const handleClick = (event) => {
    if (!clicked.includes(event.target.closest('li').id)) {
      setClicked([...clicked, event.target.closest('li').id])
    } else {
      setClicked([])
    }
  }

  // Sends the result to App to update the score board.
  useEffect(() => {
    getScore(clicked.length)
  })

  return (
    <main className="container-fluid">
      <ul className="row row-cols-2 row-cols-sm-3 row-cols-md-5">
        { cards.map( (card) => <li className="col px-0" key={card.id} onClick={(event) => handleClick(event)} id={card.id}>{card.card}</li> ) }
      </ul>
    </main>
  )
}

export default Game
