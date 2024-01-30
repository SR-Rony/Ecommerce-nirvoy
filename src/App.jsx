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

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>} >
        <Route path='/' element={<Home/>} />

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
