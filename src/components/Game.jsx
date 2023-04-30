import React from 'react'
import "../styles/style.css"

import {useSelector, useDispatch} from "react-redux"
import { allDices, playerMoves, playerBestMoves, gameStatus} from '../app/gameSlice'; 
import { newGame, roll } from '../app/gameSlice';
import Confetti from 'react-confetti'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faFacebook, faGithub, faLinkedinIn, faTwitter } from "@fortawesome/free-brands-svg-icons"
import Dice from './Dice';

export default function Game() {
  const currunt_year = new Date().getFullYear()

  const moves = useSelector(playerMoves)
  const bestMoves = useSelector(playerBestMoves)
  const dices = useSelector(allDices)
  const status = useSelector(gameStatus)

  const dicesElements = dices.map((dice) => (
    <Dice key={dice.id} id={dice.id} value={dice.value} isActive={dice.active}/>
  ))
  const dispatch = useDispatch()
  return (
    <section className='game'>
        <div className='game__score'>
          <span>Moves : {moves}</span>
          <span>Best Moves: {bestMoves}</span>
        </div>

        <div className='game__container'>
            <h1 className='game__header'>Tenzies</h1>
            <p className='game__desc'>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className='game__dies_container'>
              {dicesElements}
            </div>
            {status === "playing" ? 
            <button onClick={() => dispatch(roll())}>Roll</button>:
            <button onClick={() => dispatch(newGame())}>New Game</button>}
        </div>

        <footer className='game__credentials'>
          <div><span>© Abdelrahman Ahmed / {currunt_year}</span></div>
          <div className='game__media'>
            <a href="https://web.facebook.com/profile.php?id=100005933071217" target='_blank'>
              <FontAwesomeIcon icon={faFacebook} beat/>
            </a>
            <a href="https://twitter.com/Abdo_Megahed03" target='_blank'>
              <FontAwesomeIcon icon={faTwitter} beat/>
            </a>
            <a href="https://www.linkedin.com/in/abdelrahman-ahmed-saad-b74b35260/" target='_blank'>
              <FontAwesomeIcon icon={faLinkedinIn} beat/>
            </a>
            <a href="https://github.com/Abdo-Ahmed-cs" target='_blank'>
              <FontAwesomeIcon icon={faGithub} beat/>
            </a>
          </div>
        </footer>

        {status == "won" && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
    </section>
  )
}
