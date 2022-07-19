import React, { Children } from 'react';
import style from './Car.css'

export default (props) => {
 const inputClasses = ['input']

 if (props.name !== '') {
    inputClasses.push('green')
 } else {
    inputClasses.push('red')
 }

 if (props.name.length > 10) {
    inputClasses.push('bold')
 }

 return (
  <div className='Car'>
    <h3>Car name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <input
      onChange={props.onChangeName}
      value={props.name}
      className={inputClasses.join(' ')}
    />
    <button onClick={props.onDelete}>Delete</button>
  </div>
 )
}