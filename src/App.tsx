
import reactLogo from './assets/react.svg'
import './App.css'
import SignuPage from './components/SignIn'
import Login from './components/login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
   path: '/SignIn',
   element: <SignuPage/>
  },
  {
    path:'/login',
    element:<Login/>
  }
])
function App() {
  return (
    <div className='App'>
    {/* {/* //      <SignuPage/>
    //      <Login/>} */}
    <RouterProvider router={router}
    />
    </div>
  )
}

export default App
