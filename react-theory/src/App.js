import React, { Component } from 'react'
import './App.scss'
import About from './About/About'
import Cars from './Cars/Cars'
import { Routes, Route, Link } from "react-router-dom";

class App extends Component {
  render() {

    return (
      <div>
        <nav className="nav">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/cars">Cars</a>
            </li>
          </ul>
        </nav>

        <hr/>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>}/>
          <Route path="/about" element={<About />}/>
          <Route path="/cars" element={<Cars />}/>
        </Routes>
      </div>
    )
  }
}

export default App