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



  render() {
    console.log('render')

    const divStyle = {
      textAlign: 'center'
    }

    const cars = this.state.cars

    return (
      <div style={divStyle}>
        <div>
          <h1>{this.state.pageTitle}</h1>
        </div>

        <button onClick={this.changeTitleHandler.bind(this, 'changed!')}>Change title</button>

        <Car
         name={cars[0].name}
         year={cars[0].year}
         onChangeTitle={this.changeTitleHandler.bind(this, cars[0].name)}
        />
        <Car
         name={cars[1].name}
         year={cars[1].year}
         onChangeTitle={() => this.changeTitleHandler(cars[1].name)}
        />
        <Car
         name={cars[2].name}
         year={cars[2].year}
         onChangeTitle={() => this.changeTitleHandler(cars[2].name)}
        />
      </div>
    )
  }
}

export default App;
