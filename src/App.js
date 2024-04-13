import React from 'react';
import {ErrorBoundary} from "react-error-boundary";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";
import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { productsData } from './api/api';
import Cart from './pages/Cart';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import { Global } from '@emotion/react';

const Layout = () =>{
  return(
    <div>
      <ErrorBoundary FallbackComponent={Global}>
      <Header />
      <ScrollRestoration/>
      <Outlet />
      <Footer />
      </ErrorBoundary>
    </div>
  )
}
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route>
    <Route path="/" element = {<Layout />}>
      <Route path="/home" element={<Home />} loader={productsData}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Route>
    <Route path='/signin' element={<Signin/>}></Route>
    <Route path='/registration' element={<Registration/>}></Route>
    </Route>
    
    
  ))
  return (
    <>
    <div className='font-bodyFont bg-gray-100'>
     <RouterProvider router={router}></RouterProvider>
    </div>
    </>
  );
}

export default App;
