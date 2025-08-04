import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout';
import RecipeList from './pages/RecipeList';
import UploadRecipe from './pages/UploadRecipe';
import RecipeDetails from './pages/RecipeDetails';
import Home from './pages/Home';

const routeSwitcher=createBrowserRouter(
  [
    {
      path:'/',
      element:(
        <Layout></Layout>
      ),
      children:[
        // index:true means that Home will render on / path ie path same as parent
        { index: true, element: <Home></Home> },
        {
          path:'/list',
          element:(
            <RecipeList></RecipeList>
          )
        },
        {
          path:'/upload',
          element:(
            <UploadRecipe></UploadRecipe>
          )
        },{
          path:'/list/:id',
          element:(
            <RecipeDetails></RecipeDetails>
          )
        },
      ]
    }
  ]
)

function App() {



  return (
    <>
      <RouterProvider router={routeSwitcher}></RouterProvider>
    </>
  )
}

export default App;
