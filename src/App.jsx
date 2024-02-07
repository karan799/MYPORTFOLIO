// App.js
import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./App.css";
import ProjectDetails from './ProjectDetails';
import Resume from './Resume';
import Templateblack from './Templateblack';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Resume/>,
  },
  {
    path:"/project/:projectId",
    element: <ProjectDetails/>,
  },
  {
    path:"/project",
    element: <ProjectDetails/>,
  },
  {
    path: "/template1",
    element: <Templateblack/>,
  },
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;


