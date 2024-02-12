import React, {useState}from 'react'
import { useEffect } from 'react'
import './DP.css'
import Todoapp1 from './Todo1'
const GetData = () => {
    const [data, setdata] = useState([])

    useEffect(()=>{
(async()=>{
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const convertdata=await response.json()
        console.log(convertdata);
        setdata(convertdata)
    } 
    catch (error) {
      console.error('Error fetching data:', error);
    }
})();
// FetchData()
    },[])


  return (
    <div>
        <h1>Employees Detail's</h1>
       <div className="container">
        {data.map((items)=>{
           return(
            <div  key={items.id}className='card'>
             <h3>Name:{items.name}</h3>
             <h3>UserId:{items.username}</h3>
             <h2>Company:{items.company.name}</h2>
            <h3>PhoneNo:{items.phone}</h3>

            </div>
           )
        })}
       </div>
       <div>
        <Todoapp1/>
       </div>
    </div>
    
  )
}

export default GetData

// {data.map(item=>{
//   return <DisplayData key={item.id} item={item}/>
// })}