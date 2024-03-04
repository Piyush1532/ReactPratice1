import React, { useState ,useMemo} from 'react'

const nums=new Array(20_000_000).fill(0).map((_,i)=>{
    return{
        index:i,
        isMagical:i===10_000_000
    }
        })


const MemoPractice2 = () => {
    const [count, setcount] = useState(0)
    const [numbers, setnumbers] = useState(nums)

    // const magical=numbers.find(items=>items.isMagical===true)
   const magical= useMemo(() =>numbers.find(items=>items.isMagical===true) , [numbers])
  return (
    <div>
        <h1>Magical number is{magical.index}</h1>
        <h2>count {count}</h2>
        <button onClick={()=>setcount((count) => count+1)}>add</button>
    </div>
  )
}

export default MemoPractice2