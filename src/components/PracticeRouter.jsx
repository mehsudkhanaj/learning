import React from 'react'
import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import Home from '../components/routing/Home'
import About from '../components/routing/About'
import Contact from '../components/routing/Contact'

const PracticeRouter = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/about'>About</Link>
    <Link to='/contact'>Contact</Link>
   <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
   </Routes>
  

    </>
  )
}

export default PracticeRouter