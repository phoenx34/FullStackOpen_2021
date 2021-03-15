import React, { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Title = ({title}) => <h1>{title}</h1>

const Anecdotes = ({anecdotes, selected, points}) => {
  return(
    <div>
      {anecdotes[selected]}
      <br/>
      has {points[selected]} votes
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6).fill(0))

  const getRandom = () => setSelected(Math.floor(Math.random() * 6))
  
  const castVote = () => {
    let arrayClone = [...points]
    arrayClone[selected] += 1
    setPoints(arrayClone)
  }

  return (
    <div>
      <Title title='Anecdote of the day' />
      <Anecdotes anecdotes={anecdotes} selected={selected} points={points} />
      <Button handleClick={castVote} text='vote' />
      <Button handleClick={getRandom} text='next anecdote' />
      <Title title='Anecdote with most votes' />
      <Anecdotes anecdotes={anecdotes} selected={points.indexOf(Math.max(...points))} points={points} />
    </div>
  )
}

export default App