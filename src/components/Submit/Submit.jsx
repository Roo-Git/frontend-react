import React from 'react'
import './Submit.css'

const Submit = (props) => {
  return (
    <div className="submitStyle" type={props.type} name={props.name} onClick={props.onClick}>{props.title}
    </div>
  )
}

export default Submit
