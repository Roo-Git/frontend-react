import React from 'react';
import './Button.css';

import {useHistory} from 'react-router-dom';

const Button = (props) => {

  let history = useHistory();

  const direction = () => {
    return setTimeout(() => {
      history.push(`/${props.destiny}`)
  }, 400);

  }

  return(
    <div onClick={()=> direction()} className="button">
        {props.name}
    </div>
  )
}

export default Button;