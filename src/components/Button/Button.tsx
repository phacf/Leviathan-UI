import React from 'react'
import { ButomProps } from './types'

//STYLES
import * as S from './styles'

export const Button: React.FC<ButomProps> = props => {
  const style = getStyle()

  function getStyle () {
    const style = {}
    if (props.outline) {
      
      if (props.disabled) return S.OutlineStyle.disabled

      return props.type ? S.OutlineStyle[props.type] : S.OutlineStyle.default
    }

    if (props.disabled) return S.DefaultStyle.disabled
    return props.type && S.DefaultStyle[props.type]
  }

  return (
    <S.Button
      {...style}
      effectonHover= {props.effectOnHover}
      width={props.fillSpace ? props.fillSpace.toString() : ''}
      fontSize={S.ButtonSizes[props.size || 'default']}
    >
      {props.children}
    </S.Button>
  )
}

export default Button
