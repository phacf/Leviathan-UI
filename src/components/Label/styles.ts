import styled, { css } from 'styled-components'

//PROVIDERS
import { Theme } from '../../utils/providers/theme'

//TYPES
import { StyleTypes } from '../types'

export const Label = styled.label<StyleTypes>`
  ${() => css`
  color: ${Theme.Default.font.color.default};
  font-size: ${Theme.Default.font.size.default};
  

  `}
`
