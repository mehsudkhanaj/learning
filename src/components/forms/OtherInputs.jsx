import {useState} from 'react'

const OtherInputs = () => {
    const [state, setstate] = useState('')
    const [select, setselect] = useState('USA')
    const [checkbox, setcheckbox] = useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('Name:',(e.target[0].value))
        console.log('Country:',(e.target[1].value))
        console.log('Text:',(e.target[2].value))
        console.log('Country:',(e.target[3].value))
        console.log('Checkbox:',(e.target[4]))
    }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <label>Name: </label><br />
        <input type="text" name="name"/><br />
        <label>Email: </label><br />
        <input type="email" name="email"/><br />
        <label > Select Country</label>
        <br />
        <select name='country'> <br />
            <option value='australia'>Australia</option>
            <option value='usa'>USA</option>
            <option value='canada'>Canada</option>
            <option value='pakistan'>Pakistan</option>

            </select>
            <br />
            <label>Comments</label> <br />
            <textarea name='comments'  rows='5' cols='20'></textarea> <br />
            <label htmlFor="">I agree</label>
            <input type="checkbox" name="checkbox" value={checkbox}  onChange={(e)=>setcheck(e.target.checked)} /> <br />
            <input type="submit" value="submit" />

    </form>
    </>
  )
}

export default OtherInputs