import React, { Component,createRef } from 'react'

export default class RefTut extends Component {
    constructor(props) {
      super(props)
    this.myRef=createRef()
    this.btnRef=createRef()
      
    }
    componentDidMount() {
        console.log(this.myRef.current.innerHTML)
        console.log(this.btnRef)
    }
    handleHeading=()=>{
        this.myRef.current.align='center';
        
        this.myRef.current.style.color='red';
        this.myRef.current.style.fontSize='140px';
        this.btnRef.current.style.fontSize='30px'
        this.btnRef.current.style.borderRadius='15pxew'
        
    }
    
  render() {
    return (
      <>
      <h1 ref={this.myRef}>Hello My Refernce Component Learning</h1>
      <button ref={this.btnRef}>Button</button>
      <button  onClick={this.handleHeading}>click</button>
        
      </>
    )
  }
}
