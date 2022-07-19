import React, { Children } from 'react';
import classes from './Car.module.css'
import withClass from '../hoc/withClass';
import PropTypes from 'prop-types'
class Car extends React.Component {

   render() {
      const inputClasses = [classes.input]

      if (this.props.name !== '') {
         inputClasses.push(classes.green)
      } else {
         inputClasses.push(classes.red)
      }

      if (this.props.name.length > 10) {
         inputClasses.push(classes.bold)
      }

      return (
       <React.Fragment>
         <h3>Car name: {this.props.name}</h3>
         <p>Year: <strong>{this.props.year}</strong></p>
         <input
           type={'text'}
           onChange={this.props.onChangeName}
           value={this.props.name}
           className={inputClasses.join(' ')}
         />
         <button onClick={this.props.onDelete}>Delete</button>
       </React.Fragment>
      )
   }
}

Car.propTypes = {
   name: PropTypes.string,
   year: PropTypes.number,
   onDelete: PropTypes.func,
   onChangeName: PropTypes.func,
}

export default withClass(Car, classes.Car)
