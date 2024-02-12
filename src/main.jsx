import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import GetData from './Components/Fetch'

import MyComponent from './Hooks/userefhook.jsx'
import Todoapp1 from './Components/Todo1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // <App/>
//  <GetData/>
// {/* <MyComponent/> */}
<Todoapp1></Todoapp1>

  // {/* </React.StrictMode>, */}
)
