import React from 'react'
import { ButomProps } from './types'

//STYLES
import * as S from './styles'

//PROVIDERS 


const Button: React.FC<ButomProps> = props => {
  const buttonTypes: { [k: string]: { [k: ButomProps]: string } } = {
    accept: {backgroundColor : },
    cancel: 2,
    disabled: 3,
    close: 4
  }

  

  return <S.Button {...props || }>{props.label}</S.Button>
}

export default Button
