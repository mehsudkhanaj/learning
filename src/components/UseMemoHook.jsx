import {useState,useMemo} from 'react'

const UseMemoHook = () => {
  const [count, setcount] = useState(0)
  const [data, setdata] = useState(2)
  const multply=useMemo(function multi() {
    console.log("object")
    return count*3
    
  },[count])
  
  return (
    <>
    <h1>Count: {count}</h1>
    <h1>Data: {data}</h1>
    <h3>Multiply Fn: {multply}</h3>
    <button onClick={()=>setcount(count+1)}>Update Count</button>
    <button onClick={()=>setdata(data*10)}>Update Data</button>
    </>
  )
}

export default UseMemoHook