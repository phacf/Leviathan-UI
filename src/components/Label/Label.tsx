import React from 'react'

//STYLES
import * as S from './styles'

//TYPES
import { LabelProps } from './types'

const Label: React.FC<LabelProps> = props => {
  const type = getTypes()

  function getTypes () {
    if (props.disabled) return S.LabelType.disabled
    return props.type && S.LabelType[props.type]
  }

  return (
    <S.Label
      htmlFor={props.htmlFor}
      fontSize={S.LabelSizes[props.size || 'default']}
      fontWeight={props.bolt ? S.LabelWheight.bolt : S.LabelWheight.default}
      fontColor={type}
    >
      {props.children}
    </S.Label>
  )
}

export default Label
