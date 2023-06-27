export const TURNS = {
    X: 'X',
    O: 'O'
}

export const WINNING_COMBINATIONS = [
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