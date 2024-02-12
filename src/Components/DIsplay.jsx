import React from 'react'
import './DP.css'
const DisplayData = ({item}) => {
return(

    <div className="flex-container">
        <div className="flex-child">    {item.name}</div>
    </div>

)
}

export default DisplayData