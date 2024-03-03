import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import memoPractice from './Hooks/memopractice'

import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
 
<memoPractice/>
//  <BrowserRouter>
//   <Routes>
//       <Route path="/" element={<App />} />
//       <Route path="/form" element={<FormComp />} />
//       <Route path="/fetchdata" element={<Fetchdata />} />
//     </Routes>
//  </BrowserRouter>

  // {/* </React.StrictMode>, */}
)
