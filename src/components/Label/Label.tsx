import React from "react";

//STYLES
import * as S from './styles'

//TYPES
import {LabelProps} from './types'

const Label: React.FC<LabelProps> = (props) => {
return <S.Label htmlFor={props.htmlFor}>{props.children}</S.Label>
}

export default Label