import React from 'react';

export type ButomProps = {
    /**
    * label that goes inside the component
    */
    children?: React.ReactChildren;
    disabled?: boolean;
    outline?: boolean;
    type?: 'error' | 'warning' | 'success' | 'default'
    size?: 'small' | 'medium' | 'larfe' | 'xl';

}