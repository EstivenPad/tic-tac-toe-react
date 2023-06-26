import { Square } from "./components/Square.jsx";
import { useState } from 'react';

const TURNS = {
    X: 'X',
    O: 'O'
}

const winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    
    [0,3,6],
    [1,4,7],
    [2,5,8],

    [0,4,8],
    [2,4,6],
];

export const TicTacToeApp = () => {

    const [turn, setTurns] = useState(TURNS.X);
    const [board, setBoard] = useState(Array(9).fill(null));
    
    const updateBoard = (index) => {
        
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        setTurns( turn === TURNS.X ? TURNS.O : TURNS.X );

        checkWinner(index);
    }
    const checkWinner = (index) => {

        for(const combination of winningCombinations) {

            const [a, b, c] = combination;
            
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                console.log('YOU WIN');
            }

        };


    }

    return (
        <main className="container">
            <h1>Tic Tac Toe</h1>

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
                <span className={`square turn-square ${turn === TURNS.X ? 'selected' : ''}`}>X</span>
                <span className={`square turn-square ${turn === TURNS.O ? 'selected' : ''}`}>O</span>
            </div>
        </main>
    )
}
