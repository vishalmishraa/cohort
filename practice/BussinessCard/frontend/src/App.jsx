import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Cards } from './components/Cards'
import {CreateCard} from './components/CreateCards'


function App() {
  const [cards, setCards] = useState([]);

  fetch('http://localhost:3000/cards').then(async (res) => {
    const json = await res.json();
    setCards(json.cards);
  })
  console.log(cards);

  return (
    <>
      <CreateCard></CreateCard>
      <Cards cards={cards} />
    </>
  )
}

export default App
