import React from 'react' 
import Square from "./Square"
import styled from 'styled-components'

const BoardWrapper = styled.div`
    border: 0.22em solid black;
    width: 15em;
    height: 15em;
    margin: auto;
    margin-top: 8em;
    display: grid;
    grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`

export default function Board({ squares, onClick }){

    return(
        <BoardWrapper>
            {squares.map((square, i) => (
                <Square key={i} value={square} onClick={() => onClick(i)}></Square>
            ))}
        </BoardWrapper>
    )
}