import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Books from './components/Books';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Root from './components/Root';

const router = createBrowserRouter([
  {
    path: '*',
    element: <ErrorPage />
  },
  {
    path: '/',
    element: <Root/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/books',
        element: <Books/>
      },
      {
        path: '/about',
        element: <About />
      }
    ]
  }
]);

function App() {
  return <div>
    <RouterProvider router={ router }/>
  </div>
}

export default App
