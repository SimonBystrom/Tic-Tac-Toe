import React from 'react'
import styled from 'styled-components'

const SqButton = styled.button`
    background: white;
    border: 0.08em solid black;
    font-size: 30px;
    font-weight: 800;
    cursor: pointer;
    outline: none;
`

export default function Square({ value, onClick }){

    return(
        <SqButton onClick={onClick}>
            {value}
        </SqButton>
    )
}