import { useRef, useEffect } from 'react'

function UseRefTut () {
  const firstRef = useRef()
  const secRef = useRef()
  console.log(firstRef, secRef)
  useEffect(() => {
    console.log(firstRef)
    console.log(secRef)
    

    // console.log('Full Name = ',firstref.current.value, ' ', secRef.current.value)
  }, [])
  const handleClick = () => {
    newRef.current.style.color = 'red'
    newRef.current.align = 'center'
    firstRef.current.style.color='red'
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    alert(`Full Name = ${firstRef.current.value} ${secRef.current.value}`)
  }



  return (
    <>
      {/* <h1 ref={newRef}>Muskeeters Tech</h1>
      <button onClick={handleClick}>Click</button> */}

      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>First Name: </label>
        <input ref={firstRef}type='text' id='name' placholder='please enter your detail' />
        <br />
        <label htmlFor='lastname'>Last Name: </label>
        <input
          ref={secRef}
          type='text'
          id='lastname'
          placholder='please enter your detail'
        />
        <br />
        <button new={firstRef} type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UseRefTut
