import React, { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const Title = ({title}) => <div><h1>{title}</h1></div>

/**
 * Wrapped statistics components into a wrapper
 * so that they can be used individually.
 */
const StatsWrapper = ({clicks}) => {
  if(clicks.all === 0) return (<div>No feedback given.</div>)
  return (
    <div>
      <table>
        <tbody>
          <Statistics text='good' value={clicks.good} />
          <Statistics text='neutral' value={clicks.neutral} />
          <Statistics text='bad' value={clicks.bad} />
          <Statistics text='all' value={clicks.all} />
          <Statistics text='average' value={(clicks.good - clicks.bad) / clicks.all} />
          <Statistics text='positive' value={(clicks.good) / (clicks.all) * 100 + " %"} />
        </tbody>
      </table>
    </div>
  )
}

const Statistics = ({text, value}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
  )
} 

const App = () => {
  const [clicks, setClicks] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    all: 0
  })

  const feedback = 'give feedback'
  const statistics = 'statistics'

  const handleGoodClick = () => 
    setClicks({...clicks, good: clicks.good + 1, all: clicks.all + 1})
  const handleNeutralClick = () => 
    setClicks({...clicks, neutral: clicks.neutral + 1, all: clicks.all + 1})
  const handleBadClick = () => 
    setClicks({...clicks, bad: clicks.bad + 1, all: clicks.all + 1})
    


  return(
    <div>
      <Title title={feedback} />
      <Button handleClick={handleGoodClick} text='good' />
      <Button handleClick={handleNeutralClick} text='neutral' />
      <Button handleClick={handleBadClick} text='bad' />
      <Title title={statistics} />
      <StatsWrapper clicks={clicks} />
    </div>
  )
}

export default App