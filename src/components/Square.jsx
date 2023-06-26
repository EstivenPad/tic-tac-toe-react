export const Square = ({ children, index, updateBoard }) => {
    
    const handleTurn = () => {
        updateBoard(index)
    }

    return (
        <div onClick={ handleTurn } className="square">
            { children }
        </div>
    )
}
