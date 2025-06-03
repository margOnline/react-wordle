import { useEffect, useState } from 'react';
import Wordle from './components/Wordle.jsx';
import solutions from './constants/solutions.js'

function App() {
  const [solution, setSolution] = useState(null)
 
  useEffect(() => {
    const randomSolution = solutions[Math.floor(Math.random() * solutions.length)]
    setSolution(randomSolution.word)
  }, [setSolution])

  return (
    <div className="App">
      <h1>Wordle</h1>
      {solution && <Wordle solution={solution} />}
    </div>
  );
}

export default App
