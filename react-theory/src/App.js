import React from 'react';
// import './App.css';
import Car from './Car/Car';

const divStyle = {
  textAlign: 'center'
}

function App() {
  return (
    <div style={divStyle}>
      <div>
        <h1>Hello world!!!</h1>
      </div>
      <p>I am Frontend developer</p>

      <Car />
      <Car />
    </div>
  )
}

export default App;
