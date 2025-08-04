import './App.css'
import Layout from './components/Layout';
import NotFound from './pages/NotFound';
import RecipeDetails from './pages/RecipeDetails';
import RecipeList from './pages/RecipeList'
import SubmitRecipe from './pages/SubmitRecipe'
import {Route, Routes} from 'react-router-dom'

function App() {


  return (
    <>
      
      <Routes>

        <Route path='/' element={<Layout></Layout>}>

          <Route path='/recipeList' element={<RecipeList></RecipeList>}></Route>
          <Route path='/submitRecipe' element={<SubmitRecipe></SubmitRecipe>}></Route>

          {/* Dynamic Routing */}
          <Route path='/recipeList/:id' element={<RecipeDetails></RecipeDetails>}></Route>

          {/* Page not found */}
          <Route path='*' element={<NotFound></NotFound> }></Route>

        </Route>
      </Routes>


    </>
  )
}

export default App;
