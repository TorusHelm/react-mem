import React from 'react';
import './App.css';
import Joke from './components/Joke';
import jokesData from './JSON/ru/jokesData';

function App() {

  const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} /> );

  return (
    <div className="joke__wrapper">
      {jokeComponents}
    </div>
  )
}

export default App;