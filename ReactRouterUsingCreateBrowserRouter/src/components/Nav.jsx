import React from 'react'
import LinkComponent from './LinkComponent'

const Nav = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center', // <-- this fixes vertical alignment
      gap: '1rem', // optional: spacing between NAV and links
      padding: '1rem', // optional: gives some breathing room
      backgroundColor: 'lightblue',
      
    }}>
      <h5 style={{ margin: 0 }}>NAV</h5>
      <LinkComponent />
    </div>
  )
}

export default Nav
