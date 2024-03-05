import {useState} from 'react'

const Forms = () => {
    const [state, setstate] = useState({
        name:'',
        email:''
    })
    const handleChange=(e)=>{
        // const name=e.target.name;
        // const value=e.target.value;
        // console.log(name,value);
        const {name,value}=e.target;
        console.log(name,value)
        const new_value=(name==='email')? value.toLowerCase().replace('#','@'):value
        setstate((prev)=>{
            return{

                ...prev,
                [name]:new_value
                
            }
        })
        

    }
    const handleSubmission=(e)=>{
        e.preventDefault();
        console.log(state);
        
    }
  return (
    <>
    <form onSubmit={handleSubmission}>
        <label htmlFor="name">Name:</label><br />
        <input type="text" id="name" name="name"  placeholder="Enter your Name" value={state.name} required onChange={handleChange}/><br />
        <label> Email:</label><br />
        <input type="email" name="email" value={state.email} onChange={handleChange} placeholder="Enter your email"/><br />
        
        <button  onClick={handleChange}> Click</button>

        
    </form>
    {name}
    </>
  )
}

export default Forms