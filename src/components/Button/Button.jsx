import React from 'react';
import './Button.css';

import {useHistory} from 'react-router-dom';

const Button = (props) => {

    let history = useHistory();

    const direction = () => {
        history.push(`/${props.destiny}`)
    }

    return(
        <div onClick={()=> direction()} className="button">
            {props.name}
        </div>
    )
}

export default Button;