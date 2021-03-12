import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, 
document.getElementById('root'));

/*let counter = 1;
// not recommended way to re-render components
const refresh = () => {
  ReactDOM.render(<App counter={counter}/>,
  document.getElementById('root'))
}

setInterval(() => { 
  refresh();
  counter++;
}, 1000);*/