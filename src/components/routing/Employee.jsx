import {useParams} from 'react-router-dom'

const Employee = () => {
    const {name,age,designation}=useParams();
  return (
    <>
    <h1 style={{fontSize: '20px'}}>{name} is Mukeeters and {age} Years old and working as {designation}</h1>
        </>
  )
}

export default Employee