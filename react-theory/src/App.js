import React, { Component } from 'react';
// import './App.css';
import Car from './Car/Car';


class App extends Component {

  state = {
    cars: [
      {name: 'Citroen C4', year: 2005},
      {name: 'Toyota Camry', year: 2020},
      {name: 'BMW M5', year: 2022}
    ],
    pageTitle: 'React components'
  }

  render() {
    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <div>
          <h1>{this.state.pageTitle}</h1>
        </div>

        <Car name={cars[0].name} year={cars[0].year} />
        <Car name={cars[1].name} year={cars[1].year} />
        <Car name={cars[2].name} year={cars[2].year} />
      </div>
    )
  }
}

// const divStyle = {
//   textAlign: 'center'
// }

// function App() {
//   return (
//     <div style={divStyle}>
//       <div>
//         <h1>Hello world!!!</h1>
//       </div>
//       <p>I am Frontend developer</p>

//       <Car name={'Citroen C4'} year={'2005'} />
//       <Car name={'Toyota Camry'} year={'2020'} />
//       <Car name={'BMW M5'} year={'2022'} />
//     </div>
//   )
// }

export default App;
