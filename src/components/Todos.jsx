import React, { useContext } from 'react'
import SingleTODO from './SingleTODO'
import { ThemeContext } from '../App';


export default function Todos({showActiveOnly,showDoneOnly,state,dispatch}) {

  const theme = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className={`todos todos-${theme}`}>
        <ul>
          {state.map(i=>{
            if(!showDoneOnly && !showActiveOnly){
              return <SingleTODO key={i.id} i={i} dispatch={dispatch} />
            }else if(showDoneOnly){
                if(i.isDone){
                  return <SingleTODO key={i.id} i={i} dispatch={dispatch} />
                }
            }else if(showActiveOnly){
                if(!i.isDone){
                  return <SingleTODO key={i.id} i={i} dispatch={dispatch} />
                }
            }
          })}
        </ul>
      </div>
  )
}
