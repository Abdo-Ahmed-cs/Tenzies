import React from 'react'
import "../styles/style.css"
import {useSelector, useDispatch} from "react-redux"
import { toggleActive } from '../app/gameSlice'

export default function Dice({value, isActive, id}) {
  const dispatch = useDispatch()

  return (
    <div className={`game__die ${isActive ? "game__die--active" : ""}`} onClick={() => dispatch(toggleActive(id))}>
        <span>{value}</span>
    </div>
  )
}
