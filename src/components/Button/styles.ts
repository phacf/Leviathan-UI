import styled, { css } from 'styled-components'

//TYPES
import { StyleTypes } from '../types'

//PROVIDERS
import { Theme } from '../../utils/providers/theme'
const {Default} = Theme

export const Button = styled.button<StyleTypes>`
  ${({
    backgroudColor,
    padding,
    borderColor,
    borderRadius,
    borderWidth,
    borderStyle,
    fontSize,
    fontColor,
    fontWeight
  }) => css`
    border: ${borderWidth};
    border-color: ${borderColor};
    border-style: ${borderStyle};
    background-color: ${backgroudColor};
    padding: ${padding};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    color: ${fontColor};
    font-weight: ${fontWeight};
  `}
`

//PRESET STYLES
  

export const OutilinedDefault:StyleTypes = {
  borderColor: Default.color.primary,
  fontColor: Default.color.primary
}
