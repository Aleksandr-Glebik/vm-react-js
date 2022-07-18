import React, { Component } from 'react';
import Car from './Car/Car';


class App extends Component {

  state = {
    cars: [
      {name: 'Citroen C4', year: 2005},
      {name: 'Toyota Camry', year: 2020},
      {name: 'BMW M5', year: 2022}
    ],
    pageTitle: 'React components',
    showCars: false,
  }

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  render() {
    console.log('render')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, ind) => {
        return (
          <Car key={ind} name={car.name} year={car.year}
            onChangeTitle={() => this.changeTitleHandler(car.name)}
          />
        )
       })
    }

    return (
      <div style={divStyle}>

        <h1>{this.state.pageTitle}</h1>

        <button onClick={this.toggleCarsHandler}>Toggle Cars</button>

        {/* { this.state.showCars
           ? this.state.cars.map((car, ind) => {
              return (
                <Car key={ind} name={car.name} year={car.year}
                  onChangeTitle={() => this.changeTitleHandler(car.name)}
                />
              )
             })
           : null
        } */}
        { cars }
      </div>
    )
  }
}

export default App;
