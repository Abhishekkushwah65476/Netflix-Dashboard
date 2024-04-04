
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import GenraEdit from './Componenets/GenraEdit';
import Movies from './Pages/Movies';
import MoviesAdd from './Componenets/Movies/MoviesAdd';
import List from './Componenets/Lists/List';
import ListEdit from './Componenets/Lists/ListEdit';
import { useEffect } from 'react';
import Header from './Componenets/Auth/Header';
import Genre from './Pages/Genre';



function App() {

  const router=createBrowserRouter([
    {path:"/",element:<Login/>},
    {path:"/Register",element:<Register/>},
    {path:"/Home",element:<Home/>},
    {path:"/GenraEdit",element:<GenraEdit/>},
    {path:"/Movies",element:<Movies/>},
    {path:"/MoviesAdd",element:<MoviesAdd/>},
    {path:"/Lists",element:<List/>},
    {path:"/ListEdit",element:<ListEdit/>},
    {path:"/Header",element:<Header/>},
    {path:"/Genre",element:<Genre/>},

  ])

  return (
  <>
  <RouterProvider router={router}/>
  <ToastContainer />
  

  </>
  );
}

export default App;

