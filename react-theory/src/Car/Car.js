import React, { Children } from 'react';
import './Car.css'
class Car extends React.Component {

   componentWillReceiveProps(nextProps) {
      console.log('Car componentWillReceiveProps', nextProps);
   }

   shouldComponentUpdate(nextProps, nextState) {
      console.log('Car shouldComponentUpdate', nextProps, nextState);
      return nextProps.name.trim() !== this.props.name.trim()
   }

   componentWillUpdate(nextProps, nextState) {
      console.log('Car componentWillUpdate', nextProps, nextState);
   }

   componentDidUpdate() {
      console.log('Car componentDidUpdate');
   }

   render() {
      console.log('render Car');
      const inputClasses = ['input']

      if (this.props.name !== '') {
         inputClasses.push('green')
      } else {
         inputClasses.push('red')
      }

      if (this.props.name.length > 10) {
         inputClasses.push('bold')
      }

      return (
       <div className='Car'>
         <h3>Car name: {this.props.name}</h3>
         <p>Year: <strong>{this.props.year}</strong></p>
         <input
           onChange={this.props.onChangeName}
           value={this.props.name}
           className={inputClasses.join(' ')}
         />
         <button onClick={this.props.onDelete}>Delete</button>
       </div>
      )
   }
}

export default Car
