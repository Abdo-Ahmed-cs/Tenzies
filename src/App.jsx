import React from 'react'
import Game from './components/Game'
import {store} from './app/store'
import {Provider} from "react-redux" 


export default function App() {

  return (
    <>
      <Provider store={store}>
        <Game/>
      </Provider>
    </>
  )
}
