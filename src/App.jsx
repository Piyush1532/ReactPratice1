import { useEffect, useRef, useState } from 'react'

import './App.css'
import GetData from './Components/Fetch'

function App() {
//   const [count, setCount] = useState(0)
//   const [showPara,setPara]=useState(true)
// const [list, setlist] = useState([
//   {
//     title:"Hello World",
//     desc:"Programming Usecase",
//     color:"red"
//   },{
//     title:"I Am Ironman",
//     desc:"Marvel charecter",
//     color:"blue"
//   },{
//     title:"I Batman",
//     desc:"DC charecter",
//     color:"black"
//   },{
//     title:"This is the way",
//     desc:"Star wars",
//     color:"orange"
//   }
// ])
// 1 way
//   const Homecompo=({data})=>{
//     return(
// <>
// <h3>{data.title}</h3>
// <p>{data.desc}</p>
// <h5>{data.color}</h5>
// </>
      
//     )
    
//   }


//2nd way
//   const Homecompo=(data)=>{
//     return(
// <>
// <h3>{data.title}</h3>
// <p>{data.desc}</p>
// <h5>{data.color}</h5>
// </>
      
//     )
    
//   }
  return (
    <>

      {/* {showPara? <p>This paragraph is shown because the value is True</p>:  <p>This paragraph is shown because the value is False</p>} */}
      {/* {showPara&&  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>} */}
   
      {/* <div className="card">
        <button onClick={() => setPara(!showPara)}>
          count is {count}
        </button>
   
      </div> */}
   <div>
{/* {list.map(data=>{
  return <Homecompo key={data.title} data={data}/>
})}
     */}

     {/* {list.map(data=>{
      return <Homecompo title={data.title} desc={data.desc} color={data.color} />
     })} */}
   </div>


    </>
  )
}

export default App
