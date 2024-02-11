import React from 'react'
import './App.css'
import Root from './components/layout/Root';
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>} >
        <Route path='/' element={<Home/>} />
        <Route path='*' element={<Error/>} />

      </Route>
    )
  );

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
