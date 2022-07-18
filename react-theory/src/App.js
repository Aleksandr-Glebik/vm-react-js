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

      <Car name={'Citroen C4'} year={'2005'}>
        <p style={{color: 'grey'}}>Color: white</p>
      </Car>
      <Car name={'Toyota Camry'} year={'2020'}>
        <p style={{color: 'black'}}>Color: black</p>
      </Car>
      <Car name={'BMW M5'} year={'2022'}>
        <p style={{color: 'red'}}>Color: red</p>
      </Car>
    </div>
  )
}

export default App;
