import { useState } from 'react'
import './App.css'
import kk from './assets/Vector.png'
import tar from './assets/tar.png'
import stet from './assets/stet.png'



function Person() {

  return (
    <>
        <div id='person'>
            <img  src={tar} width={200}/>
            <img src={stet} width={200}/>
        </div>
        
    </>
  )
}


export default Person