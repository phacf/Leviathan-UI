import React from 'react';

export type ButomProps = {
    children?: React.ReactChildren;
    disabled?: boolean;
    outline?: boolean;
    type?: 'error' | 'warning' | 'success' | 'default'
    size?: 'default' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
    effectOnHover?: boolean;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    fillSpace?: boolean;
}