import styled, { css } from 'styled-components'

//TYPES
import { StyleTypes } from '../types'

//PROVIDERS
import { Theme } from '../../utils/providers/theme'
const { Default } = Theme

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
    fontWeight,
    cursor
  }) => css`
    border: ${borderWidth || 'none'};
    border-color: ${borderColor || 'none'};
    border-style: ${borderStyle || 'none'};
    background-color: ${backgroudColor || Default.color.primary};
    padding: ${padding || '0.3rem 1rem'};
    border-radius: ${borderRadius || Default.border.radius.soft};
    font-size: ${fontSize || Default.font.size.default};
    color: ${fontColor || Default.font.color.light};
    font-weight: ${fontWeight || Default.font.weight.default};
    
    cursor: ${cursor || 'pointer'};

    :disabled {
      border: ${borderWidth || 'none'};
      border-color: ${borderColor || 'none'};
      border-style: ${borderStyle || 'none'};
      background-color: ${backgroudColor || Default.color.disabled};
      padding: ${padding || '0.3rem 1rem'};
      border-radius: ${borderRadius || Default.border.radius.soft};
      font-size: ${fontSize || Default.font.size.default};
      color: ${fontColor || Default.font.color.disabled};
      font-weight: ${fontWeight || Default.font.weight.default};
      cursor:not-allowed;
    }
  `}
`

//PRESET STYLES

export const ButtonSizes: {[k:string]: StyleTypes} = Default.font.size;

export const OutlineStyle: {[k: string]: StyleTypes} = {
  default: {
    borderColor: Default.color.primary,
    borderStyle: Default.border.style.default,
    borderWidth: Default.border.width.default,
    fontColor: Default.color.primary,
    backgroudColor: 'none'
  },
  warning: {
    borderColor: Default.color.warning,
    borderStyle: Default.border.style.default,
    borderWidth: Default.border.width.default,
    fontColor: Default.color.warning,
    backgroudColor: 'none'
  },
  error: {
    borderColor: Default.color.error,
    borderStyle: Default.border.style.default,
    borderWidth: Default.border.width.default,
    fontColor: Default.color.error,
    backgroudColor: 'none'
  },
  success: {
    borderColor: Default.color.success,
    borderStyle: Default.border.style.default,
    borderWidth: Default.border.width.default,
    fontColor: Default.color.success,
    backgroudColor: 'none'
  },
  disabled: {
    borderColor: Default.color.disabled,
    borderStyle: Default.border.style.default,
    borderWidth: Default.border.width.default,
    fontColor: Default.color.disabled,
    backgroudColor: 'none',
    cursor: 'not-allowed'
  }
};

export const DefaultStyle: {[k: string]: StyleTypes} = {
  error: {
    backgroudColor: Default.color.error
  },
  warning: {
    backgroudColor: Default.color.warning
  },
  success: {
    backgroudColor: Default.color.success
  },
  disabled: {
    fontColor: Default.font.color.disabled,
    backgroudColor: Default.color.disabled,
    cursor: 'not-allowed'
  }
};
