import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './pages/Home';
import Film from './pages/Film';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/film/:id",
    element: <Film />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
