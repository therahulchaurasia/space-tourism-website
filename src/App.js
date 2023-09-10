import logo from './logo.svg'
import './App.css'
import data from './data.json'
import Home from './pages/Home'
import Destination from './pages/Destination'
import Crew from './pages/Crew'
import Technology from './pages/Technology'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
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
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
