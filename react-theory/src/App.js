import React, { Component } from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { Routes, Route, NavLink } from 'react-router-dom'
import CarDetail from './CarDetail/CarDetail'

class App extends Component {
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

        <hr/>
        <Routes>
          <Route path="/" element={<h1 style={{textAlign: 'center'}}>Home page</h1>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cars" element={<Cars />}/>
          <Route path="/cars">
            {/* <Route path=":name" element={<h1>Carrrrr</h1>} /> */}
            <Route path=":name" element={<CarDetail />} />
          </Route>
        </Routes>
      </div>
    )
  }
}

export default App