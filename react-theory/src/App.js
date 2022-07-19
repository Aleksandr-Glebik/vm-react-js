import React, { Component } from 'react';
import Car from './Car/Car';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import Counter from './Counter/Counter';

export const ClickedContext = React.createContext(false)
class App extends Component {
  constructor(props) {
    // console.log('app constructor')
    super(props)

    this.state = {
      cars: [
        {name: 'Citroen C4', year: 2005},
        {name: 'Toyota Camry', year: 2020},
        {name: 'BMW M5', year: 2022}
      ],
      pageTitle: 'React components',
      showCars: false,
      clicked: false,
    }
  }

  toggleCarsHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  onChangeName = (name, ind) => {
    const car = this.state.cars[ind]
    car.name = name
    const cars = [...this.state.cars]
    cars[ind] = car

    this.setState({
      cars: cars
    })
  }

  deleteHandler(ind) {
    const cars = this.state.cars.concat()
    cars.splice(ind, 1)

    this.setState({
      cars: cars
    })
  }

  // componentWillMount() {
  //   console.log('APP componentWillMount')
  // }

  componentDidMount() {
    console.log('APP componentDidMount')
  }

  render() {
    console.log('APP RENDER')

    const divStyle = {
      textAlign: 'center'
    }

    let cars = null
    if (this.state.showCars) {
      cars = this.state.cars.map((car, ind) => {
        return (
          <ErrorBoundary key={ind}>
            <Car
              name={car.name}
              year={car.year}
              ind={ind}
              onDelete={this.deleteHandler.bind(this, ind)}
              onChangeName={(event) => this.onChangeName(event.target.value, ind)}
            />
          </ErrorBoundary>
        )
       })
    }

    return (
      <div style={divStyle}>

        {/* <h1>{this.state.pageTitle}</h1> */}
        <h1>{this.props.title}</h1>

        {/* <Counter clicked={this.state.clicked}/> */}
        <ClickedContext.Provider value={this.state.clicked}>
          <Counter />
        </ClickedContext.Provider>

        <button onClick={this.toggleCarsHandler}
          style={{marginTop: '20px'}}
        >Toggle Cars</button>

        <button onClick={() => this.setState({clicked: true})}>
          Change clicked
        </button>

        <div style={{
          width: '400px',
          margin: 'auto',
          paddingTop: '20px'
        }}>
          { cars }
        </div>

      </div>
    )
  }
}

export default App;
