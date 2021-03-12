import React, { useState } from 'react';

/** STATEFUL COMPONENT EXAMPLE:
  * USES React's state hook
  * 
  * useState adds state to the component and renders
  * it initialized with the value of 0
  * 
  * We assign the items to the variables:
  * counter - assigned initial value of state, which is 0
  * setCounter - assigned to a function that will be used to modify the state.
  * 
  * we call setTimeout and pass it two params: 
  *  a function to increment the counter, 
  *  and a timeout of one second. 
  * (The function passed (setCounter) is invoked one second after
  *  calling the setTimeout function)
  * 
  * When setCounter is called, React re-renders the component
  * (aka, the body of the component gets re-executed).
  * On the second execution, useState is called and returns 
  * a new value of the state: 1
  * Also makes function call to setTimeout,
  * which will increment the counter again.
  * 
  * Every time the setCounter modifies the state it causes
  * the component to re-render. The value of the state will
  * be incremented again after one second, ad infinitum
  *
const App = () => {
  const [counter,setCounter] = useState(0)

  setTimeout(() => 
    setCounter(counter+1),
    1000
  )

  return (
    <div>{counter}</div>
  )
  */

/** EVENT HANDLING EXAMPLE 
const App = () => {
  const [ counter,setCounter ] = useState(0)

  /*const handleClick = () => {
    console.log('clicked')
  }*

  const increaseByOne = () => setCounter(counter+1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <div>{counter}</div>
      <button onClick={increaseByOne}>
        plus
      </button>
      <button onClick={setToZero}>
        zero
      </button>
    </div>
  )
  // NOTE: Cannot write button like:
  // <button onClick={setCounter(counter+1)}
  // because this is a function call, does not work with 
  // react state hooks
}*/

/** SPLITTING APP INTO 3 SMALLER COMPONENTS
 * This is a best practice.
 * -- "Lift the state up" - 
 * "Often, serveral components need to reflect the same
 * changing data. We recommend lifting the shared state up 
 * to their closest common ancestor"
 *

/*const Display = (props) => {
  return (
    <div>{props.counter}</div>

  )
}*

// Destructuring Display component
const Display = ({counter}) => <div>{counter}</div>
  


const Button = ({handleClick, text}) => 
  <button onClick={handleClick}> {text} </button>

const App = () => {
  const [ counter,setCounter ] = useState(0)
  const increaseByOne = () => setCounter(counter+1)
  const decreaseByOne = () => setCounter(counter-1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={increaseByOne} text='plus' />
      <Button handleClick={setToZero} text='zero' />
      <Button handleClick={decreaseByOne} text='minus'/>
    </div>
  )
}*/

/** COMPLEX STATE EXAMPLE
 * - Use the useState function multiple times to 
 *   create separate 'pieces' of state.
 *
const App = () => {
  // const [left,setLeft] = useState(0)
  // const [right,setRight] = useState(0)

  // State can be of any type. Below is equiv to above commented out
  const [clicks,setClicks] = useState({
    left: 0, right: 0
  })

  const handleLeftClick = () => setClicks({...clicks, left: clicks.left + 1})
                                            // object spread syntax
  /* In practice, {...clicks} creates a new object
     that has copies of all the properties of the clicks object.
     When we specify a particular property - e.g. right in 
     {...clicks, right: 1}, the value of the right property
     in the new object will be 1.
 *

  const handleRightClick = () => setClicks({...clicks, right: clicks.right + 1})
//  DO NOT MUTATE REACT STATES DIRECTLY
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}> left </button>
      <button onClick={handleRightClick}> right </button>
      {clicks.right}
    </div>
  )
}
*/

/** CONDITIONAL RENDERING EXAMPLE: 
 * The history component renders completely different
 * React elements depending on the state of the application.
*/
const History = (props) => {
  if(props.allClicks.length === 0) {
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = (props) => {
  console.log('props value is', props)
  // Do not print values in console.log like in java. 
  // Doing '' + props will result in 'props value is [object object]
  // can debug in chrome by writing command 'debugger' in code
  // where you want app to pause. Can also trigger debugging
  // by setting breakpoints in the 'Sources' tab of inspect in chrome
  const { onClick,text } = props
  return(
    <button onClick={onClick}>
      {text}
    </button>
  )
}

/**
 * HANDLING ARRAYS
 */
const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L')) // Concat doesn't mutate. It duplicates.
    // Do NOT push to arrays in React, components should not be mutated
    // directly.
    setLeft(left+1)
  }

  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text='left' />
      <Button onClick={handleRightClick} text='right' />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
  // join() joins all items in array into a single string,
  // delimited by ' '.
}

/** REACT HOOKS RULES:
 * - The useState function (and useEffect) CANNOT
 *   be called from inside a loop, conditional, or 
 *   any place that is not a function that defines a component.
 * - EVENT HANDLING: 
 *   To execute function call when a button is clicked,
 *   <button onClick={() => callFunction()}.. 
 *   better example:
 * const setToValue = (newValue) => () => {
 *  setValue(newValue)
 * }
 * 
 * return (
 * <div>
 *  {value}
 *  <button onClick={setToValue(1000)}>thousand</button>
 *  <button onClick={setToValue(0)}>reset</button>
 * </div>
 * 
 * - Do not define Components within components.
 * )
 */


export default App;