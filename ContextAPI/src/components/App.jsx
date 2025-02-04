import React from 'react'
import { ThemeGenerator } from './store/ThemeGenerator'
import { useState } from 'react'
import Toolbar from './components/Toolbar'

const App = () => {

const [theme, setTheme]=useState("light")

  return (
    <ThemeGenerator.Provider value={{theme, setTheme}}>
      <Toolbar></Toolbar>
    </ThemeGenerator.Provider>
  )
}

export default App