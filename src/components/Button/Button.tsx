import React from 'react'
import './Button.css'

type ButtonTypes = {
  label: string,
  title?: string
}

const Button: React.FC<ButtonTypes> = ({...props}) => {
  return <button>{props.label}</button>
}

export default Button
