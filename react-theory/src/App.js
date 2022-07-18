import React, { Component } from 'react';
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

  changeTitleHandler = (newTitle) => {
    this.setState({
      pageTitle: newTitle
    })
  }

  handleInput = (event) => {
    // console.log('change', event.target.value)
    this.setState({
      pageTitle: event.target.value
    })
  }

  render() {
    console.log('render')

    const divStyle = {
      textAlign: 'center'
    }

    return (
      <div style={divStyle}>

        <h1>{this.state.pageTitle}</h1>

        <input type={'text'} onChange={this.handleInput} />

        <button onClick={this.changeTitleHandler.bind(this, 'changed!')}>Change title</button>

        { this.state.cars.map((car, ind) => {
          return (
            <Car key={ind} name={car.name} year={car.year}
              onChangeTitle={() => this.changeTitleHandler(car.name)}
            />
          )
        })}
      </div>
    )
  }
}

export default App;
