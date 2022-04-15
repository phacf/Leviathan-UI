import React from 'react'
import { ButomProps } from './types'

//STYLES
import * as S from './styles'


export const Button: React.FC<ButomProps> = (props) => {
  
  return <S.Button>{props.children}</S.Button>
}

export const Outlined: React.FC<ButomProps> = (props) => {
  return <S.Button {...S.OutilinedDefault}{...props} >{props.children}</S.Button>
}

export default Button;

export const StorybookSelect = {
  ['Outlined']: (props: ButomProps)=> <Outlined {...props}/>,
  ['Default']: (props: ButomProps)=> <Button {...props}/>
}
