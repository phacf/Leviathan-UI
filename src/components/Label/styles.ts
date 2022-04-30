import styled, { css } from 'styled-components'

//PROVIDERS
import { Theme } from '../../utils/providers/theme'
const { Default } = Theme

//TYPES
import { StyleTypes } from '../types'

export const Label = styled.label<StyleTypes>`
  ${({ fontSize, fontWeight, fontColor }) => css`
    color: ${fontColor || Theme.Default.font.color.default};
    font-size: ${fontSize || Theme.Default.font.size.default};
    font-weight: ${fontWeight};
  `}
`

export const LabelSizes: { [k: string]: string } = Default.font.size

export const LabelWheight = Default.font.weight

export const LabelType: { [k: string]: string } = {
  default: Default.color.primary,
  success: Default.color.success,
  warning: Default.color.warning,
  error: Default.color.error,
  disabled: Default.color.disabled
}
