import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <div>
      <input className="input" 
        type={props.type} 
        name={props.name} 
        onChange={props.onChange} 
        maxLength={props.maxLength} 
      />
    </div>
  )
};

export default Input
