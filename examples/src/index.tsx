import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from './root';
import BasicCSS from './Basic CSS demo/BasicCSS';
import StyledComponents from './Styled Components Demo/StyledComponents';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />
  },
  {
    path: '/login', // this is just because of moments being weird, really
    element: <Root />
  },
  {
    path: '/basic-css',
    element: <BasicCSS />
  },
  {
    path: '/styled-components',
    element: <StyledComponents />
  },
  {
    path: '/ssr-with-suspense',
    element: <span>coming soon!</span>
  }
])

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
