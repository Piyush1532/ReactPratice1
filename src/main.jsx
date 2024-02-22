import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import GetData from './Components/Fetch'

import MyComponent from './Hooks/userefhook.jsx'
import Todoapp1 from './Components/Todo1.jsx'
import FormComponent from './Components/forms.jsx'
import Fetchdata from './assigment3/fetchdata'
import { BrowserRouter } from 'react-router-dom';
// import { Route, Routes } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import { Route, Routes } from "react-router-dom";
import FormComp from './assigment3/form'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <App/>
//  <GetData/>
// {/* <MyComponent/> */}
 //<Todoapp1></Todoapp1>
 <BrowserRouter>
  <Routes>
      <Route path="/" element={<App />} />
      <Route path="/form" element={<FormComp />} />
      <Route path="/fetchdata" element={<Fetchdata />} />
    </Routes>
 </BrowserRouter>

  // {/* </React.StrictMode>, */}
)
