import styled, { css } from 'styled-components'

import { StyleTypes } from '../types'
import { Default } from '../../utils/providers/theme'

export const Button = styled.button<StyleTypes>`
  ${({
  backgroudColor,
  padding,
  borderColor,
  borderRadius,
  fontSize,
  fontColor,
}) => css`
    border: ${Default.border.width.default} ;
    border-color: black;
    border-style: ${Default.border.style.default};
    background-color: ${Default.color.primary};
    padding: ${padding};
    border-radius: ${Default.border.radius.hard};
    font-size: ${Default.font.size.default};
    color: ${Default.font.color.light};
    font-weight:normal ;
    box-shadow:   ${Default.shadow.distance.default}${Default.shadow.color.hard};
    
    :active {
      box-shadow:  ${Default.shadow.distance.pressed}${Default.shadow.color.hard};
    }
  `}
`
