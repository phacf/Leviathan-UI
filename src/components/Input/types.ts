
import React from 'react';
import { StyleTypes } from '../types'

export type InputProps = {
    onChange?: (e: React.BaseSyntheticEvent) => any;
    fillSpace?: boolean;
    id: string;
    key?: string;
    label?: string;
    correct?: boolean;
    hint?: string;
    size?: 'default' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';

}

export type Container = StyleTypes & {
    correct: string;
}

export type Label = StyleTypes & {
    inputFocus: boolean;
    color?: string;
}

