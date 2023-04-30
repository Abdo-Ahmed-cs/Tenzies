import {configureStore} from "@reduxjs/toolkit" 
import GameReducer from "../app/gameSlice"

export const store = configureStore({
    reducer: {
        game: GameReducer,
    }
})