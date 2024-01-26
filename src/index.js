// import React, { useContext, createContext, useState } from "react";
import ReactDOM from 'react-dom';
import {
  createBrowserRouter,
  RouterProvider,
  useParams,
}from 'react-router-dom';
// import {
//   Routes,
//   BrowserRouter,
//   Route
// } from 'react-router-dom';
import MvApp from './components/homepage/Movies-App';
import Shows from './components/homepage/shows'
import './index.css';


const router = createBrowserRouter([
  {
      path:"/",
      element:<MvApp/>,  
  },
  {
      path:"/shows/:show",
      element:<Shows/>
  },
])

// function App(){
//   return(
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<MvApp/>}></Route>
//         <Route path="/shows/:show" element={<Shows/>}></Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <App/>
// );