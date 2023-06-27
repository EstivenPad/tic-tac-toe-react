import { TURNS, WINNING_COMBINATIONS } from './constants.js';
import { Board } from './components/Board.jsx';
import { WinnerModal } from './components/WinnerModal.jsx';
import { useState } from 'react';

export const TicTacToeApp = () => {

    const [turn, setTurn] = useState(TURNS.X);
    const [board, setBoard] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState(null);

    const updateBoard = (index) => {
        if(board[index] || winner) return;

        //Changing board
        const newBoard = [...board];
        newBoard[index] = turn;
        setBoard(newBoard);

        //Changing turn
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
        setTurn( newTurn );
        

        //Checking if there is any winner
        const newWinner = checkWinner(newBoard);

        if(newWinner)  
            setWinner(newWinner);
        else if(checkEndGame(newBoard))
            setWinner(false);
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

    const checkEndGame = (newBoard) => {
        return newBoard.every((square) => square !== null);
    }

    const resetGame = () => {
        setTurn(TURNS.X);
        setBoard(Array(9).fill(null));
        setWinner(null);
    }

    return (
        <main className="container">
            <h1>Tic-Tac-Toe</h1>

            <Board board={board} updateBoard={updateBoard} />
            
            <div className="turns">
                <span className={`square turn-square ${turn === TURNS.X ? 'selected' : ''}`}>X</span>
                <span className={`square turn-square ${turn === TURNS.O ? 'selected' : ''}`}>O</span>
            </div>

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )
}
