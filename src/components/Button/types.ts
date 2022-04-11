import React, { ReactChild } from 'react';
import { StyleTypes } from '../types'

export type ButomProps = StyleTypes & {
    label?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    mode?: string;
    disabled?: string;
    children?: ReactChild

}