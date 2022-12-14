import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './pages/Home';
import FilmPage from './pages/Film';
import "./main.css"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/film/:id",
    element: <FilmPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
