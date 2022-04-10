import styled, { css } from "styled-components";

import {PropsTypes} from '../types'
import {principal} from '../../utils/providers/color'

export const Button = styled.button <PropsTypes>`
${({backgroudColor, padding, borderColor, borderRadius, fontSize})=> css`
    border: 1px solid ${borderColor};
    background-color: ${backgroudColor};
    padding: ${padding};
    border-radius: ${borderRadius};
    font-size: ${fontSize};
    color: ${fontColor};
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.4);
    :active{
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.4);
    }
    :hover{
    background-color: #767676;
    }
`}
`;