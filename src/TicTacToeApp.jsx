import { Square } from './components/Square.jsx';
import { useState } from 'react';

const TURNS = {
    X: 'X',
    O: 'O'
}

const WINNING_COMBINATIONS = [
    //Row winning combinations
    [0,1,2],
    [3,4,5],
    [6,7,8],

    //Column winning combinations 
    [0,3,6],
    [1,4,7],
    [2,5,8],

    //Diagonal winning combinations
    [0,4,8],
    [2,4,6],
];

export const TicTacToeApp = () => {

    const [turn, setTurns] = useState(TURNS.X);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        
        if(board[index] || winner) return;

        //Changing board
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        //Changing turn
        setTurns( turn === TURNS.X ? TURNS.O : TURNS.X );

        //Checking if there is any winner
        const newWinner = checkWinner(newBoard);
        
        if(newWinner) setWinner(newWinner);
    }

    const checkWinner = (boardToCheck) => {

        for(const combination of WINNING_COMBINATIONS) {
            const [a, b, c] = combination;
            
            if(boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]){
                return boardToCheck[a];
            }
        };

        return null;
    }

    return (
        <main className="container">
            <h1>Tic Tac Toe</h1>

            <div className="board">
            {
                board.map((value, index) => (
                    <Square key={ index } index={ index } updateBoard={updateBoard}>
                        { value }
                    </Square>                
                ))
            }
            </div>
            
            <div className="turns">
                <span className={`square turn-square ${turn === TURNS.X ? 'selected' : ''}`}>X</span>
                <span className={`square turn-square ${turn === TURNS.O ? 'selected' : ''}`}>O</span>
            </div>

            {
                winner !== null && (
                    <div className="winner-modal">
                        { 
                        winner === false ? 
                            <h2>WINNER</h2>
                        : (
                            <>
                                <h2>WINNER</h2>
                                <Square>{turn}</Square>
                            </>
                            ) 
                        }
                            
                        <button className="button">REST GAME</button>
                        
                    </div>
                )
            }
        </main>
    )
}
