import React, {useState} from 'react'
import styled from 'styled-components'

import {selectWinner} from '../gameLogic'
import Board from "./Board"


const Display = styled.div`
    width: 200px;
    margin: 20px auto;

`

export default function Game(){

    const [board, setBoard] = useState(Array(9).fill(null))
    const [xIsNext, setXisNext] = useState(true)
    const winner = selectWinner(board)

    function handleClick(i){
        const boardCopy = [...board]
        // checked if game is won OR square is used
        if(winner || boardCopy[i]) return
        // if not, set value of square to the value of square index -> make next move opposite of previous move
        boardCopy[i] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setXisNext(!xIsNext)
    }

    function jumpTo(){

    }

    function newGame(){
        return <button onClick={() => setBoard(Array(9).fill(null))}> Start Game</button>
    }

    return(
        <>
            <Board squares={board} onClick={handleClick}></Board>
            <Display>
                <p>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? "X" : "O")}</p>
                {newGame()}
            </Display>
        </>
    )
}