import React, { useContext } from 'react'
import { FaMoon , FaPlusCircle ,FaRegSun   } from "react-icons/fa";
import { ThemeContext } from '../App';

export default function Header({toggleTheme ,handleAdd,inputRef}) {

  const theme = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className="header">
        <div className="logo">
            <h1>TODO</h1>
            <button onClick={toggleTheme}>{theme === 'light' ? <FaMoon /> : <FaRegSun /> }</button>
        </div>
        <form className='addForm' action={handleAdd}>
          <input className={`addInput addInput-${theme}`} type="text" ref={inputRef}/>
          <button className='addBtn' onClick={handleAdd}><FaPlusCircle /></button>
        </form>
    </div>
  )
}
