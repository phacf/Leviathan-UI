import React from 'react'
import { ButomProps } from './types'

//STYLES
import *as S from './styles'

const Button: React.FC<ButomProps> = (props) => {
  return <S.Button {...props} onC>{props.label}</S.Button>
}

export default Button
