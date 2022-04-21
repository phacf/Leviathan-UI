import React, { useEffect } from "react";

//STYLES
import * as S from './styles'
import {Theme} from '../../utils/providers/theme'

//TYPES
import { InputProps } from './types'

const InputComponent: React.FC<InputProps> = (props) => {
    const [focus, setFocus] = React.useState(false)
    const [inputValue, setInputValue] = React.useState('')
    
    function handleChange(e: React.BaseSyntheticEvent) {
        setInputValue(e.target.value)
        props.onChange && props.onChange(e)
    }

    function getIscorrect(){
        if(!!!inputValue) return 'disabled'
        if(props.correct === undefined) return 'disabled'
        if(!props.correct) return 'error'
        return 'success'
    }
    
    return (
        <S.InputContainer
            correct={Theme.Default.color[getIscorrect()]}
        >
            <S.InputLabel
                inputFocus={focus || !!inputValue}
                htmlFor={props.id}>
                {props.label}
            </S.InputLabel>

            <S.Input
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={handleChange}
                id={props.id}
            />

        </S.InputContainer>
    )
}

const Input: React.FC<InputProps> = React.memo(InputComponent)

export default Input 