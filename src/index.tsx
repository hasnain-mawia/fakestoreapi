import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Errorpage from './screens/404 page';
import Dasboard from './screens/dashboard';
import Detail from './screens/detail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Errorpage/>,
    children:[
      {
      path: "/",
      element: <Dasboard/>,
    },
      {
      path: "/detail/:id",
      element: <Detail/>,
    },
  ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
