import React from 'react'
import {useState,useCallback} from 'react'
import ExampleCallBack from './ExampleCallBack'
const UseCallbackHook = () => {
    const [count, setcount] = useState(0)
    const [item, setitem] = useState(2)
    const newData=useCallback(() => {

        console.log('I am new Data fucntion',item)
    },
        [item] )
  return (
    <>
    <h1>Count: {count}</h1>
    
    
    <button onClick={()=>setcount(count+1)}>Update Count</button>
    <br />
    <ExampleCallBack item={item}/>
    <button onClick={()=>setitem(item*2)}>Update Item</button>

    

    </>
  )
}

export default UseCallbackHook