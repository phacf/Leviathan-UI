import React from 'react'
import { ButomProps } from './types'

//STYLES
import * as S from './styles'

//PROVIDERS
import {color} from '../../utils/providers/theme'

const Button: React.FC<ButomProps> = (props) => {
  
  function getStyle(props:ButomProps):ButomProps{
    
    const buttonTypes: {[k:string]: any}= {
      success: {
        fontColor: color.success,
        borderColor: color.success,
        backgroundColor: color.primary
      },
      warning: {
        fontColor: color.warning,
        borderColor: color.warning,
        backgroundColor: color.primary
      },
      error: {
        fontColor: color.error,
        borderColor: color.error,
        backgroundColor: color.primary
      },
      disabled: {
        fontColor: color.fontDisabled,
        backgroundColor: color.disabled,
        disabled: true
      },
      default: {
        fontColor: color.fontBlack,
        backgroundColor: color.success
      }
    };
    
    if(props.mode) return buttonTypes[props.mode]
    return props
  }
  
  
  
  return <S.Button {...getStyle(props)} >{props.label}</S.Button>
}

export default Button
