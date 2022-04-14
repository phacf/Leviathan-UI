import React from 'react'
import { ButomProps } from './types'

//STYLES
import * as S from './styles'

//PROVIDERS
import { Default } from '../../utils/providers/theme'

const Button: React.FC<ButomProps> = (props) => {

//@TODO calculate posotion 


  return <S.Button onClick={(e)=> console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY)}>{props.children}</S.Button>
}

export default Button
