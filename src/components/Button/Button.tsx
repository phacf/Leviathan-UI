import React from 'react'
import './Button.css'
import { ButomProps } from '../types'

const Button: React.FC<ButomProps> = ({ ...props }) => {
  return <button>{props.label}</button>
}

export default Button
