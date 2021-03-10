import React from 'react';

const Header = (props) => {
  return (
    <div>
      <h1>{props.course.name}</h1>
    </div>
  );
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  );
}

const Content = (props) => {
  const [first,second,third] = props.parts.parts;
  console.log(props.parts);
  return (
    <div>
      <Part name={first.name} exercises={first.exercises}/>
      <Part name={second.name} exercises={second.exercises}/>
      <Part name={third.name} exercises={third.exercises}/>
    </div>
  );
}

const Total = (props) => {
  console.log(props)
  const [first,second,third] = props.total.parts;
  const total=first.exercises + second.exercises + third.exercises;
  return (
    <div>
      <p>Number of exercises {total}</p>
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content parts={course}/>
      <Total total={course} />
    </div>
  )
}

export default App;
