import styled, { css } from "styled-components";

import {PropsTypes} from '../types'

export const Button = styled.button <PropsTypes>`
${({fontColor})=> css`
    border: none;
    background-color: #9e9e9e;
    padding: 5px 8px;
    border-radius: 3px;
    font-size: 20px;
    color: ${fontColor || '#000'};
    box-shadow: 0px 5px 5px -2px rgba(0,0,0,0.4);
    :active{
    box-shadow: 0px 3px 3px -2px rgba(0,0,0,0.4);
    }
    :hover{
    background-color: #767676;
    }
`}
`;