import {useState} from 'react'

const MulitpleCheck = () => {
    const [fruit, setfruit] = useState([])
    const handleChange=(e)=>{
        const value=e.target.value;
        const checked=e.target.checked;
        console.log(value,checked)
        if(checked){
            setfruit([
                ...fruit,value
            ])

        }else{
            

        }
        const handleSubmit=(e)=>{
            e.preventDefault();
            console.log(e.target.value)
        }
       
        

    }
  return (
    <>
    <form>
        <label htmlFor="">Select Fruits: &nbsp;</label><br />
        <input type='checkbox' id='apple' name='fruit' value='Apple'  onChange={handleChange}/> Apple<br/>
        <input type='checkbox' id='banana' name='fruit' value='Banana' onChange={handleChange} /> Banana<br/>
        <input type='checkbox' id='orange' name='fruit' value='Orange' onChange={handleChange} /> Orange<br/>
        <input type='checkbox' id='grapes' name='fruit' value='Grapes' onChange={handleChange} /> Grapes<br/>
        <input type="submit" value="submit" />
        
        

    </form>
    </>
  )
}

export default MulitpleCheck