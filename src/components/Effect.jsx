import {useEffect,useState} from 'react'
import React from 'react'
import Practice from './Practice'

const Effect = () => {
    const [state, setstate] = useState(0)
    const [name, setname] = useState('Jamshed')

    useEffect(() => {
        console.log('Component run')
        
       

    },[state,name] )
    const handleName=()=>{
        setname("Mohammad Jamshed")
    }
    
  return (
    <>
    <h1>Count: {state}</h1>
    <h2>Name: {name}</h2>

    
    <button onClick={()=>setstate((state)=>state+1)}>Click</button>
    <button onClick={handleName}>Update Name</button>
    </>
    
  )
}

export default Effect