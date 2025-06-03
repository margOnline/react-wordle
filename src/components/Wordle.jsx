import React, { useEffect } from 'react'
import useWordle from '../hooks/useWordle'
import Grid from './Grid.jsx'
import Keypad from './Keypad.jsx'
import keys from '../constants/keys.js'

export default function Wordle({ solution }) {
  const {currentGuess, guesses, turn, isCorrect, usedKeys, handleKeyup } = useWordle(solution)
  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)

    return () => window.removeEventListener('keyup', handleKeyup)
  }, [handleKeyup])

  return (
    <div>
      <Grid guesses={guesses} currentGuess={currentGuess} turn={turn} />
      <Keypad keys={keys} usedKeys={usedKeys} />
    </div>
  )
}
