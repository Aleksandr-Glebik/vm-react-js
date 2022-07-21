import React, { Component } from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { Routes, Route, NavLink } from 'react-router-dom'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {

  state = {
    isLoggedIn: false
  }

  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/cars">Cars</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <div style={{textAlign: 'center'}}>
          <h3>Is logged in {this.state.isLoggedIn ? 'true' : 'false'}</h3>
          <button
            onClick={() => this.setState({
              isLoggedIn: !this.state.isLoggedIn
            })}>Login</button>
        </div>


        <hr/>
        <Routes>
          <Route path="/" element={<h1 style={{textAlign: 'center'}}>Home page</h1>}/>

          { this.state.isLoggedIn ? <Route path="/about" element={<About />}/> : null }

          <Route path="/cars" element={<Cars />}/>
          <Route path="/cars">
            {/* <Route path=":name" element={<h1>Carrrrr</h1>} /> */}
            <Route path=":name" element={<CarDetail />} />
          </Route>
          {/* <Route path="*" element={<h1 style={{textAlign: 'center', color: 'red'}}>404 not found</h1>} /> */}
        </Routes>
      </div>
    )
  }
}

export default App