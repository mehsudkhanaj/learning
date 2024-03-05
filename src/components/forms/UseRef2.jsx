import { useRef, useState,useEffect } from 'react'

export default function UseRef2 () {
  const [inputValue, setinputValue] = useState('')
  // const [count, setcount] = useState(0)
  const count=useRef(0);
  useEffect(() => {
    // console.log(count.current)
    count.current+=1;
  
  }, [inputValue])
  return (
    <>
      <label>Enter Name: </label>
      <input type='text' placeholder='Enter Name' value={inputValue} onChange={(e)=>setinputValue(e.target.value)} />
      
      <h2>Render Cout: {count.current}</h2>
      <h3>Input Data: {inputValue}</h3>
    </>
  )
}
