import React from 'react'
import {BrowserRouter,Routes,Route,NavLink,Navigate} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import Employee from './Employee'
import Search from './Search'

import './style.css'

const Navbar = () => {
  return (
    <>
     {/* <BrowserRouter> */}
    <div className='nav'>
    <NavLink className='nav-link' style={({isActive})=>{return {backgroundColor: isActive ? 'aqua':'yellow'}}} to="/home"> Home</NavLink> 
    <NavLink className='nav-link' style={({isActive})=>{return {backgroundColor: isActive ? 'aqua':'yellow'}}}  to="/about">About</NavLink>
    <NavLink className='nav-link' style={({isActive})=>{return {backgroundColor: isActive ? 'aqua':'yellow'}}}  to="/contact"> Contact</NavLink>
    <NavLink className='nav-link' style={({isActive})=>{return {backgroundColor: isActive ? 'aqua':'yellow'}}}  to="/search"> Search</NavLink>
    <NavLink className='nav-link' style={({isActive})=>{return {backgroundColor: isActive ? 'aqua':'yellow'}}}  to="/employee"> Employee</NavLink>
    </div>
    <div className='route'>

    
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/search' element={<Search/>}/>
      <Route path='/employee/:name/:age/:designation' element={<Employee/>}/>
      <Route path='/*' element={<Navigate to="/home"/>}/>
      

      

    </Routes></div>

    
    
    
    
    </>
  )
}

export default Navbar