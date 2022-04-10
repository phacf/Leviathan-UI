import {PropsTypes} from '../types'

export type ButomProps = PropsTypes & {
    label?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>
    
}