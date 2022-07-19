import React, { Children } from 'react';
import './Car.css'
class Car extends React.Component {

   // componentWillReceiveProps(nextProps) {
   //    console.log('Car componentWillReceiveProps', nextProps);
   // }

   shouldComponentUpdate(nextProps, nextState) {
      console.log('Car shouldComponentUpdate', nextProps, nextState);
      return nextProps.name.trim() !== this.props.name.trim()
   }

   // componentWillUpdate(nextProps, nextState) {
   //    console.log('Car componentWillUpdate', nextProps, nextState);
   // }

   // static getDerivedStateFromProps(nextProps, prevState) {
   //    console.log('Car getDerivedStateFromProps', nextProps, prevState);

   //    return prevState
   // }

   componentDidUpdate() {
      console.log('Car componentDidUpdate');
   }

   // getSnapshotBeforeUpdate() {
   //    console.log('Car getSnapshotBeforeUpdate');
   // }

   componentWillUnmount() {
      console.log('Car componentWillUnmount');
   }

   render() {
      console.log('render Car');

      // if (Math.random() > 0.99) {
      //    throw new Error('Car random failed')
      // }

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
