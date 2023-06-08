// import { Square } from "./components/Square.jsx";

import { useState } from 'react';

const TURNS = {
    X: 'X',
    O: 'O'
}

const Square = ({ children, index, updateBoard }) => {
    
    const handleTurn = () => {
        updateBoard(index)
    }

    return (
        <div onClick={ handleTurn } className="square">{children}</div>
    )
}

export const TicTacToeApp = () => {

    const [turn, setTurns] = useState(TURNS.X)
    const [board, setBoard] = useState(Array(9).fill(null));
    
    const updateBoard = (index) => {
        
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        setTurns(turn )

    }

    return (
        <main className="container">
            <h1>Tic Tac Toe App</h1>

            <div className="board">
            {
                board.map( (value, index) => (
                    <Square key={ index } index={ index } updateBoard={updateBoard}>
                        { value }
                    </Square>                
                ))
            }
            </div>

            <h2>Turn</h2>

            <div className="turns">
                <span id="selected" className="square turn-square">X</span>
                <span className="square turn-square">O</span>
            </div>
        </main>
    )
}
