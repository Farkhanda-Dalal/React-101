import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import Button from './Button'

const Layout = () => {
  return (
    <>
    <h1>WELCOME TO THE RECIPE APP</h1>

    <Nav></Nav>
    <Outlet></Outlet>
    <Button></Button>
    <Footer></Footer>
    </>

  )
}

export default Layout