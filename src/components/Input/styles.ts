import styled, { css } from 'styled-components'

//PROVIDERS
import { Theme } from '../../utils/providers/theme'

//TYPES
import { StyleTypes } from '../types'
import * as Type from './types'

export const Input = styled.input<StyleTypes>`
  ${() => css`
  padding: 0.4rem;
  font-family: ${Theme.Default.font.family};
  position: relative;
  font-size: ${Theme.Default.font.size.default};
  color: ${Theme.Default.font.color.default};
  border: 0;
  outline: 0;
  
`}
`;

export const InputLabel = styled.label<Type.Label> `
${({ inputFocus }) => css`
  position: absolute;
  z-index: 1;
  bottom: ${!inputFocus ? '0.4rem' : '1.8rem'};
  left: 0.4rem;
  font-size: ${inputFocus && Theme.Default.font.size.small};
  transition: 0.15s ease-in-out;
  color: ${Theme.Default.font.color.default};
`}
`;

export const InputContainer = styled.div<Type.Container> `
${({correct}) => css`
  position: relative;
  border-bottom: ${`${Theme.Default.border.width.default} ${Theme.Default.border.style.default}`} ;
  border-color: ${correct};  
  width: fit-content;
  height: fit-content;
  transition: 0.15s ease-in-out;
`}
`;

export const InputHint = styled.div <StyleTypes> `
${()=>css`
  color: ${Theme.Default.color.error};
  font-size: ${Theme.Default.font.size.small};
  right: 0.4rem;
  bottom: 1.8rem;
  position : absolute;
  font-weight: ${Theme.Default.font.weight.bolt};
`}
`;