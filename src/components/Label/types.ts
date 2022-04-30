import React from 'react'

export type LabelProps = {
  htmlFor?: string
  children?: React.ReactChildren;
  size?: 'default' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  bolt?: boolean;
  disabled?: boolean;
  type?: string;
}
