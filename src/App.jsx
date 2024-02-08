import React, { useRef , useReducer, useState, useContext, createContext, useEffect } from 'react'
import Reducer from './Reducer'
import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer';

export const ThemeContext = createContext()

export default function App() {
  const [state,dispatch]  = useReducer(Reducer,[])
  const [showDoneOnly,setShowDoneOnly]  = useState(false)
  const [showActiveOnly,setShowActiveOnly]  = useState(false)
  const [theme,setTheme]  = useState('light')

  const inputRef = useRef('')

  const handleAdd = e=>{
    e.preventDefault()
    if(inputRef.current.value == ''){
      alert('error place holder')
    }else{
      dispatch({type: 'add',payload:inputRef.current.value})
      inputRef.current.value = ''
    }
  }

  useEffect(()=>{
    document.body.className = theme
  },[theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  

  return (
    <ThemeContext.Provider value={theme} >
      <div className='app' id={theme}>
        <Header toggleTheme={toggleTheme} inputRef={inputRef} handleAdd={handleAdd} />
        {/*todos */}
        <Todos showActiveOnly={showActiveOnly} showDoneOnly={showDoneOnly} state={state} dispatch={dispatch} />
        {/* footer action */}
        <Footer showActiveOnly={showActiveOnly} showDoneOnly={showDoneOnly} setShowActiveOnly={setShowActiveOnly}  setShowDoneOnly={setShowDoneOnly} dispatch={dispatch} count={state.length} />
      </div>
    </ThemeContext.Provider>
  )
}
