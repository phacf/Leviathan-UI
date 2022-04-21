
import React from 'react';
import { StyleTypes } from '../types'

export type InputProps {
    onChange?: (e: React.BaseSyntheticEvent) => any;
    id: string;
    key?: string;
    label?: string;
    correct?: boolean;
}

export type Container = StyleTypes & {
    correct: string;
}

export type Label = StyleTypes & {
    inputFocus: boolean;
    color?: string;
}