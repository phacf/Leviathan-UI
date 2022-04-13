import styled, { css } from 'styled-components'

import { StyleTypes } from '../types'
import {color} from '../../utils/providers/theme'

export const Button = styled.button<StyleTypes>`
  ${({
    backgroudColor,
    padding,
    borderColor,
    borderRadius,
    fontSize,
    fontColor,
  }) => css`
    border: ${borderColor ? `2px solid ${borderColor}` : 'none'};
    background-color: ${backgroudColor || color.primary};
    padding: ${padding || '10px 15px'};
    border-radius: ${borderRadius || '5px'};
    font-size: ${fontSize};
    color: ${fontColor || color.fontWhite};
    font-weight: bold;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.4);
    
    :active {
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.4);
    }
  `}
`
