import React, { Children } from 'react';

export default (props) => (
    <div style={{
        border: '1px solid #ccc',
        marginBottom: '20px',
        padding: '10px'
        }}>
        <h3>Car name: {props.name}</h3>
        <p>Year: <strong>{props.year}</strong></p>
        <input onChange={props.onChangeName} value={props.name} />
        <button onClick={props.onDelete}>Delete</button>
    </div>
)