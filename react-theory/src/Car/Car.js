import React, { Children } from 'react';
import './Car.css'
class Car extends React.Component {
   render() {
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

// export default (props) => {
//  const inputClasses = ['input']

//  if (props.name !== '') {
//     inputClasses.push('green')
//  } else {
//     inputClasses.push('red')
//  }

//  if (props.name.length > 10) {
//     inputClasses.push('bold')
//  }

//  return (
//   <div className='Car'>
//     <h3>Car name: {props.name}</h3>
//     <p>Year: <strong>{props.year}</strong></p>
//     <input
//       onChange={props.onChangeName}
//       value={props.name}
//       className={inputClasses.join(' ')}
//     />
//     <button onClick={props.onDelete}>Delete</button>
//   </div>
//  )
// }