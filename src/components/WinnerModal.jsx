export const WinnerModal = ({ winner, resetGame }) => {
    
    if(winner === null) return;

    return (
        <div className="winner-modal">
            { 
            winner === false ? 
                <h2>DRAW</h2>
            :(
                <>
                    <h2>WINNER</h2>
                    <span className="square">
                        { winner }
                    </span>
                </>
            ) 
            }
                
            <button onClick={ resetGame } className="button">RESET GAME</button>
            
        </div>
    )
}
