import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import ProductList from './pages/ProductList'
import Item from './pages/Item'

function App() {

  const router= createBrowserRouter([
    {
      path:'/',
      element:( <Layout></Layout>),
      children:[
        {index: true, element:(<ProductList ></ProductList>)},
        {
          path:'/item/:id',
          element: (<Item></Item>)
        },
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
