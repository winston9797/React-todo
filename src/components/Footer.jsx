import React, { useContext } from 'react'
import { ThemeContext } from '../App';


export default function Footer({showDoneOnly,showActiveOnly, setShowActiveOnly,setShowDoneOnly,dispatch,count}) {

  const theme = useContext(ThemeContext)


  return (
    <footer className={`footer footer-${theme}`}>
        <div>{count} items left</div>
        <div className='actionPanel'>
        <button className={!showActiveOnly && !showDoneOnly ? 'active' : '' } onClick={()=>{
          setShowActiveOnly(false) 
          setShowDoneOnly(false)
        }}>All</button>
        <button className={showActiveOnly && !showDoneOnly ? 'active' : '' } onClick={()=>{
          setShowActiveOnly(true)
          setShowDoneOnly(false)
        }}>Active</button>
        <button className={showDoneOnly ? 'active' : '' } onClick={()=>setShowDoneOnly(true)}>Completed</button>
        </div>
        <div>
        <button onClick={()=>{dispatch({type: 'deleteDone'})}}>clear Completed</button>
        </div>
      </footer>
  )
}
