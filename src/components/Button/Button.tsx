import React from 'react'
import { ButomProps } from './types'

//STYLES
import * as S from './styles'

//PROVIDERS
import {} from '../../utils/providers/theme'

const Button: React.FC<ButomProps> = (props) => {
  
  
  
  return <S.Button >{props.children}</S.Button>
}

export default Button
