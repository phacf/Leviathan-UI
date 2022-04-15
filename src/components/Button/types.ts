import React from 'react';

export type ButomProps = {
    /**
    * label that goes inside the component
    */
    children?: React.ReactChildren;
    disabled?: boolean;
    outlined?: boolean;
    small?: boolean;
    medium?: boolean;
    large?: boolean;
    Xl?:boolean;

}