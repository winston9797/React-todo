import React, { useContext } from 'react'
import { ThemeContext } from '../App';


export default function SingleTODO({i,dispatch}) {
  
  const theme = useContext(ThemeContext)

  return (
        <li className={`singleTodo singleTodo-${theme}`}>
        <input type="checkbox" checked={i.isDone} onChange={()=>{dispatch({type: 'done',payload:i.id})}}/>
        <span style={i.isDone ? {textDecoration:'line-through' , color:'#ccc'} :{textDecoration:'none'} }>{i.text} </span>
        <button onClick={()=>{dispatch({type: 'delete',payload:i.id})}}>x</button> 
        </li>
  )
}
