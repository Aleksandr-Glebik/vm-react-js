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

      <Car name={'Citroen C4'} year={'2005'}/>
      <Car name={'Toyota Camry'} year={'2020'}/>
      <Car name={'BMW M5'} year={'2022'}/>
    </div>
  )
}

export default App;
