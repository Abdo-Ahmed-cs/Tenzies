import {createSlice, nanoid} from "@reduxjs/toolkit"

function randomValue() {
    const min = Math.ceil(1);
    const max = Math.floor(7);
    return Math.floor(Math.random() * (max - min) + min);
}
function createDice() {
    return {
        id: nanoid(),
        value: randomValue(),
        active: false
    }
}

function createDices (){
    const dices = []
    for (let i = 0; i < 10; i++){
        dices.push(createDice())
    }
    return dices
}

// our slice starts from here

const initialState = {
    dices: [...createDices()],
    status: "playing",
    moves: 0,
    bestMoves: 0,
}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        toggleActive: (state, action) => {
            state.dices = state.dices.map(dice => (
                dice.id === action.payload? {...dice, active: !dice.active} : dice
            ))
            state.status = state.dices.every((dice) => (dice.active == true && dice.value == state.dices[0].value)) ? "won" : "playing"
        }
        ,
        roll: (state) => {
            state.dices = state.dices.map(dice => (
                dice.active === true ? dice : createDice()
            ))
            state.moves += 1
        },
        newGame: (state) => {
            state.dices = [...createDices()]
            state.bestMoves = state.moves < state.bestMoves ? state.bestMoves : state.moves
            state.moves = 0
            state.status = "playing" 
        }
    },
})

export default gameSlice.reducer
export const {toggleActive, roll, newGame} = gameSlice.actions
export const allDices = (state) => (state.game.dices)
export const playerMoves = (state) => (state.game.moves)
export const playerBestMoves = (state) => (state.game.bestMoves)
export const gameStatus = (state) => (state.game.status)