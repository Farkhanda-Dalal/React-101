import React from 'react'
import Text from './components/Text'
import Button from './components/Button'
import ContextProvider from './store/Context'

const App = () => {
  return (
    <ContextProvider>
      <Text></Text>
      <Button></Button>
    </ContextProvider>
  )
}

export default App