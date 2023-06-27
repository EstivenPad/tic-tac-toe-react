import { Square } from './Square';

export const Board = ({ board, updateBoard }) => {
    return (
        <div className="board">
            {
                board.map((square, index) => (
                    <Square key={ index } index={ index } updateBoard={ updateBoard }>
                        { square }
                    </Square>                
                ))
            }
        </div>
    )
}
