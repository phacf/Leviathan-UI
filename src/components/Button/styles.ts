import styled, { css } from 'styled-components'

import { ButomProps } from './types'

export const Button = styled.button<ButomProps>`
  ${({
    backgroudColor,
    padding,
    borderColor,
    borderRadius,
    fontSize,
    fontColor,
    disabled
  }) => css`
    border: ${borderColor ? `2px solid ${borderColor}` : 'none'};
    background-color: ${backgroudColor};
    padding: ${padding || '10px 15px'};
    border-radius: ${borderRadius || '5px'};
    font-size: ${fontSize};
    color: ${fontColor};
    font-weight: bold;
    box-shadow: 0px 5px 5px -2px rgba(0, 0, 0, 0.4);
    cursor: ${disabled? 'not-allowed': 'pointer'};
    
    :hover {
      background-color: filter: brightness(0.4);
    }
    :active {
      box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.4);
    }
  `}
`
