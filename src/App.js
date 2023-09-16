import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import Home from './pages/Home'
import Technology from './pages/Technology'

//TODO: Create a custom not found page for this project.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/destination',
    element: <Destination />,
  },
  {
    path: '/crew',
    element: <Crew />,
  },
  {
    path: '/technology',
    element: <Technology />,
  },
])

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
