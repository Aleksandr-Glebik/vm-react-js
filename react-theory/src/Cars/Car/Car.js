import React from 'react'
import './Car.scss'
import { Link } from 'react-router-dom'


const Car = props => {
  return (
    <Link to={`/cars/${props.name.toLowerCase()}`} className={'Link'}>
      <div className={'Car'}>
        <h3>Сar name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
      </div>
    </Link>
  )
}

export default Car