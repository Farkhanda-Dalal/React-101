import React from 'react'
import { useContext } from 'react'
import { ThemeGenerator } from '../store/ThemeGenerator'

const Toolbar = () => {

const {theme,setTheme}=useContext(ThemeGenerator)

  return (
    <>
    <div>{theme}</div>
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle Theme
      </button>
    </>
  )
}

export default Toolbar
