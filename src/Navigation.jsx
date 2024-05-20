import { useEffect, useRef, useState } from 'react'
import './nav.css'

export default function Navigation(){
  return(
    <nav>
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