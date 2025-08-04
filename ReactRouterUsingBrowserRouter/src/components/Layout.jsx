import { Link, Outlet, useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Layout = () => {

  const navigate=useNavigate();
  
  return (
    <>
        <h1>WELCOME TO RECIPE WEBSITE</h1>
        
        <Header></Header>

        <Link to={'/recipeList'} style={{margin: "40px"}}> Go to see recipe List</Link>
        <Link to={'/submitRecipe'} style={{margin: "40px"}}> Go and upload new recipe</Link>

        <Outlet></Outlet>
        
        <button onClick={() => { navigate('/recipeList') }} style={{margin: "40px"}}>Show Recipes</button>
        <button onClick={() => { navigate('/submitRecipe') }} style={{margin: "40px"}}>Upload Recipes</button>

        <Footer></Footer>
    </>
  )
}

export default Layout