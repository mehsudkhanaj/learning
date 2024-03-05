import {useState} from 'react'

const Uwo = () => {
    const obj={
        name:'jimi',
        age:'29',
        height: '5.11',
        isYoung:true
    }
    
    const [person, setperson] = useState(obj)
    const dataChange=()=>{
        setperson((x)=>{
            return {
                ...x,
                name:'jimikhan'


            }
        })
    }

  return (
    <>
    <h1>{person.name}</h1>
    
    
    
   <button onClick={dataChange}>Change</button>
    </>
  )
}

export default Uwo