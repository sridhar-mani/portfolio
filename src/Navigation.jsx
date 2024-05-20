import { useEffect, useRef, useState } from 'react'
import './nav.css'

export default function Navigation(){
  let [scrolling,setScrolling]=useState(0);
  let change=useRef();
  console.log(scrolling);
  useEffect(()=>{
    setScrolling(window.pageYOffset)
    if(scrolling>50){
      console.log(scrolling);
      change.current.className='change';
    }
    else{
      change.current.className='';
    }
  },[window.pageYOffset])
  return(
    <nav ref={change}>
      <div className='extra'>
      <a href='/' id='logo'><h1>S</h1><p>ridhar</p><h1>M</h1><p>ani</p></a>
      <div className='pages'>
      <a href='/projects'>Projects</a>
      <a href='/aboutme'>Contact me</a>
      </div>
      </div>
    </nav>
  )
}