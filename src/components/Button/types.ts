import React, { ReactChild } from 'react';

export type ButomProps = {
    label?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    children?: ReactChild;
    outlined?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    Xl?:boolean;

}