import { useState } from 'react'

import './App.css'
import Game from './Game'
import InitialScreen from './InitialScreen'

function App() {
  const [showGame, setShowGame] = useState(false)
  
  console.log({showGame})

  return (
    <div className="p-9 main">
      

      {showGame ?
    <>
                <h1>Unscramble the words:</h1>
      <Game/>
    </>
        :
        <InitialScreen setShowGame={setShowGame} />}
    </div>
  )
}

export default App
