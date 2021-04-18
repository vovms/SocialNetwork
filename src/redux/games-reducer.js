const MAKE_A_MOVE = 'MAKE-A-MOVE';
const NEW_GAME = 'NEW-GAME';
const player_O = 'O';
const player_X = 'X';

let initialState = {
    gameMatrix: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']],
    currentPlayer: player_O,
    winner: '',
    gameOver: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case MAKE_A_MOVE: {
            if (state.gameOver) { return state; }
            if (state.gameMatrix[action.gridId.split('.')[0]][action.gridId.split('.')[1]] != '-') { return state; }
            let newState = { ...state };
            newState.gameMatrix = [...state.gameMatrix];
            newState.gameMatrix[action.gridId.split('.')[0]][action.gridId.split('.')[1]] = state.currentPlayer;
            newState.currentPlayer = (state.currentPlayer == player_O ? player_X : player_O);
            if (checkToSomebodyWin(newState.gameMatrix)) {
                newState.winner = 'Congratulate !!! ' + state.currentPlayer + ' WIN !!!';
                newState.gameOver = true;
            }
            return newState;
        }

        case NEW_GAME: {
            let newState = initialState;
            newState.gameMatrix = [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']];
            return newState;
        }

        default: return state;
    }
}

let checkToSomebodyWin = (gameMatrix) => {
    if (gameMatrix[0][0] == gameMatrix[0][1] && gameMatrix[0][0] == gameMatrix[0][2] && gameMatrix[0][0] != '-') {
        return true;
    } else if (gameMatrix[1][0] == gameMatrix[1][1] && gameMatrix[1][0] == gameMatrix[1][2] && gameMatrix[1][0] != '-') {
        return true;
    } else if (gameMatrix[2][0] == gameMatrix[2][1] && gameMatrix[2][0] == gameMatrix[2][2] && gameMatrix[2][0] != '-') {
        return true;
    } else if (gameMatrix[0][0] == gameMatrix[1][1] && gameMatrix[0][0] == gameMatrix[2][2] && gameMatrix[0][0] != '-') {
        return true;
    } else if (gameMatrix[0][2] == gameMatrix[1][1] && gameMatrix[0][2] == gameMatrix[2][0] && gameMatrix[0][2] != '-') {
        return true;
    }
     else return false;
}

export const MakeAMoveActionCreator = (gridId) =>
    ({ type: MAKE_A_MOVE, gridId: gridId })

export const NewGameActionCreator = () => ({ type: NEW_GAME })
export default profileReducer;